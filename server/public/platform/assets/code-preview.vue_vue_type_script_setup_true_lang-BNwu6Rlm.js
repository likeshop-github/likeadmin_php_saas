import{r as B,g as T,k as N,l as S,P as U}from"./element-plus-CSiqOtzA.js";import{f as d,b as $}from"./index-CtAauVK2.js";import{u as j}from"./vue-clipboard3-8CNoFg4V.js";import{d as D,r as L,b as P,ah as F,o as c,c as m,V as t,M as a,u as i,i as u,U as M,aa as R,L as q,a as p,S as z}from"./@vue-TMcuEboY.js";const A={class:"code-preview"},G={class:"flex",style:{height:"50vh"}},Q=D({__name:"code-preview",props:{modelValue:{type:Boolean},code:{}},emits:["update:modelValue"],setup(_,{emit:f}){const b=_,V=f,{toClipboard:g}=j(),n=L("index0"),h=async l=>{try{await g(l),d.msgSuccess("复制成功")}catch{d.msgError("复制失败")}},s=P({get(){return b.modelValue},set(l){V("update:modelValue",l)}});return(l,e)=>{const v=F("highlightjs"),k=B,y=$,C=T,x=N,E=S,w=U;return c(),m("div",A,[t(w,{modelValue:i(s),"onUpdate:modelValue":e[1]||(e[1]=o=>u(s)?s.value=o:null),width:"900px",title:"代码预览"},{default:a(()=>[t(E,{modelValue:i(n),"onUpdate:modelValue":e[0]||(e[0]=o=>u(n)?n.value=o:null)},{default:a(()=>[(c(!0),m(M,null,R(l.code,(o,r)=>(c(),q(x,{label:o.name,name:`index${r}`,key:r},{default:a(()=>[p("div",G,[t(k,{class:"flex-1"},{default:a(()=>[t(v,{autodetect:"",code:o.content},null,8,["code"])]),_:2},1024),p("div",null,[t(C,{onClick:H=>h(o.content),type:"primary",link:""},{icon:a(()=>[t(y,{name:"el-icon-CopyDocument"})]),default:a(()=>[e[2]||(e[2]=z(" 复制 "))]),_:2},1032,["onClick"])])])]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}});export{Q as _};
