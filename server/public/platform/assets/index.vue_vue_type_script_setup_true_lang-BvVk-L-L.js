import{a1 as l}from"./element-plus-DYHMmEbd.js";import{d as p,b as i,o as u,L as c}from"./@vue-pHjCrgw6.js";const f=p({__name:"index",props:{startTime:{default:""},endTime:{default:""}},emits:["update:startTime","update:endTime"],setup(r,{emit:m}){const a=r,e=m,n=i({get:()=>[a.startTime,a.endTime],set:t=>{t===null?(e("update:startTime",""),e("update:endTime","")):(e("update:startTime",t[0]),e("update:endTime",t[1]))}});return(t,o)=>{const s=l;return u(),c(s,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=d=>n.value=d),type:"datetimerange","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"YYYY-MM-DD HH:mm:ss",clearable:""},null,8,["modelValue"])}}});export{f as _};
