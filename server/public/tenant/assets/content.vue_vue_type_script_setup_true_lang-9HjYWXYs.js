import c from"./decoration-img-B9NcJglS.js";import{d as i,b as n,o as l,c as u,a as h,V as m,u as d,a0 as f}from"./@vue-TMcuEboY.js";const g={class:"banner-image w-full h-full"},b=i({__name:"content",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},height:{type:String,default:"96px"}},setup(e){const r=e,t=n(()=>{var a;return((a=r.content.data)==null?void 0:a.filter(s=>s.is_show=="1"))||[]}),o=n(()=>Array.isArray(t.value)&&t.value[0]?t.value[0].image:"");return(a,s)=>(l(),u("div",{class:"banner",style:f(e.styles)},[h("div",g,[m(c,{width:"100%",height:e.styles.height||e.height,src:d(o),fit:"contain"},null,8,["height","src"])])],4))}});export{b as _};
