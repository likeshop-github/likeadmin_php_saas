import{B as R,C as h,g as C,D as E}from"./element-plus-B9ALq7eR.js";import{a as g,b as k}from"./role-CaYlq9GC.js";import{P as D}from"./index-C-QCDPmx.js";import{d as F,s as c,r as B,b as I,Z as U,o as N,c as P,V as l,M as n,u as a}from"./@vue-TMcuEboY.js";const q={class:"edit-popup"},G=F({__name:"edit",emits:["success","close"],setup(z,{expose:f,emit:_}){const p=_,d=c(),r=c(),m=B("add"),b=I(()=>m.value=="edit"?"编辑角色":"新增角色"),o=U({id:"",name:"",desc:"",sort:0,menu_id:[]}),w={name:[{required:!0,message:"请输入名称",trigger:["blur"]}]},V=async()=>{var t,e;await((t=d.value)==null?void 0:t.validate()),m.value=="edit"?await g(o):await k(o),(e=r.value)==null||e.close(),p("success")},v=()=>{p("close")};return f({open:(t="add")=>{var e;m.value=t,(e=r.value)==null||e.open()},setFormData:async t=>{for(const e in o)t[e]!=null&&t[e]!=null&&(o[e]=t[e])}}),(t,e)=>{const i=R,u=h,x=C,y=E;return N(),P("div",q,[l(D,{ref_key:"popupRef",ref:r,title:a(b),async:!0,width:"550px",onConfirm:V,onClose:v},{default:n(()=>[l(y,{class:"ls-form",ref_key:"formRef",ref:d,rules:w,model:a(o),"label-width":"60px"},{default:n(()=>[l(u,{label:"名称",prop:"name"},{default:n(()=>[l(i,{class:"ls-input",modelValue:a(o).name,"onUpdate:modelValue":e[0]||(e[0]=s=>a(o).name=s),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])]),_:1}),l(u,{label:"备注",prop:"desc"},{default:n(()=>[l(i,{modelValue:a(o).desc,"onUpdate:modelValue":e[1]||(e[1]=s=>a(o).desc=s),type:"textarea",autosize:{minRows:4,maxRows:6},placeholder:"请输入备注",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1}),l(u,{label:"排序",prop:"sort"},{default:n(()=>[l(x,{modelValue:a(o).sort,"onUpdate:modelValue":e[2]||(e[2]=s=>a(o).sort=s),min:0,max:9999},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{G as _};
