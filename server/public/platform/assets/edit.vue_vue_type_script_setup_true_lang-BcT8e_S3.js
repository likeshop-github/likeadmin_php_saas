import{A as g,B as E,L as C,M as F,C as T}from"./element-plus-CSiqOtzA.js";import{h as U,i as q}from"./dict-DBQDdYdO.js";import{P as B}from"./index-DbnIr1Po.js";import{d as D,s as c,r as A,b as I,Z as M,o as N,c as P,V as t,M as s,u as l,S as _}from"./@vue-TMcuEboY.js";const S={class:"edit-popup"},J=D({__name:"edit",emits:["success","close"],setup(h,{expose:V,emit:y}){const p=y,i=c(),u=c(),m=A("add"),b=I(()=>m.value=="edit"?"编辑字典类型":"新增字典类型"),o=M({id:"",name:"",type:"",status:1,remark:""}),v={name:[{required:!0,message:"请输入字典名称",trigger:["blur"]}],type:[{required:!0,message:"请输入字典类型",trigger:["blur"]}]},w=async()=>{var a,e;await((a=i.value)==null?void 0:a.validate()),m.value=="edit"?await U(o):await q(o),(e=u.value)==null||e.close(),p("success")},x=()=>{p("close")};return V({open:(a="add")=>{var e;m.value=a,(e=u.value)==null||e.open()},setFormData:a=>{for(const e in o)a[e]!=null&&a[e]!=null&&(o[e]=a[e])}}),(a,e)=>{const d=g,n=E,f=C,k=F,R=T;return N(),P("div",S,[t(B,{ref_key:"popupRef",ref:u,title:l(b),async:!0,width:"550px",onConfirm:w,onClose:x},{default:s(()=>[t(R,{class:"ls-form",ref_key:"formRef",ref:i,rules:v,model:l(o),"label-width":"84px"},{default:s(()=>[t(n,{label:"字典名称",prop:"name"},{default:s(()=>[t(d,{modelValue:l(o).name,"onUpdate:modelValue":e[0]||(e[0]=r=>l(o).name=r),placeholder:"请输入字典名称",clearable:""},null,8,["modelValue"])]),_:1}),t(n,{label:"字典类型",prop:"type"},{default:s(()=>[t(d,{modelValue:l(o).type,"onUpdate:modelValue":e[1]||(e[1]=r=>l(o).type=r),placeholder:"请输入字典类型",clearable:""},null,8,["modelValue"])]),_:1}),t(n,{label:"字典状态",required:"",prop:"status"},{default:s(()=>[t(k,{modelValue:l(o).status,"onUpdate:modelValue":e[2]||(e[2]=r=>l(o).status=r)},{default:s(()=>[t(f,{value:1},{default:s(()=>e[4]||(e[4]=[_("正常")])),_:1}),t(f,{value:0},{default:s(()=>e[5]||(e[5]=[_("停用")])),_:1})]),_:1},8,["modelValue"])]),_:1}),t(n,{label:"备注",prop:"remark"},{default:s(()=>[t(d,{modelValue:l(o).remark,"onUpdate:modelValue":e[3]||(e[3]=r=>l(o).remark=r),type:"textarea",autosize:{minRows:4,maxRows:6},clearable:"",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{J as _};
