import{B as D,C as U,g as h,f as B,D as j}from"./element-plus-DYHMmEbd.js";import{c as q,d as F,e as I}from"./post-GlPhch-h.js";import{P as N}from"./index-C9g2zszt.js";import{d as P,s as f,r as S,b as z,Z as A,o as M,c as T,V as l,M as r,u as t,a as _}from"./@vue-pHjCrgw6.js";const Z={class:"edit-popup"},O=P({__name:"edit",emits:["success","close"],setup(G,{expose:V,emit:b}){const i=b,p=f(),m=f(),u=S("add"),v=z(()=>u.value=="edit"?"编辑岗位":"新增岗位"),o=A({id:"",name:"",code:"",sort:0,remark:"",status:1}),w={code:[{required:!0,message:"请输入岗位编码",trigger:["blur"]}],name:[{required:!0,message:"请输入岗位名称",trigger:["blur"]}]},x=async()=>{var a,e;await((a=p.value)==null?void 0:a.validate()),u.value=="edit"?await q(o):await F(o),(e=m.value)==null||e.close(),i("success")},g=(a="add")=>{var e;u.value=a,(e=m.value)==null||e.open()},c=a=>{for(const e in o)a[e]!=null&&a[e]!=null&&(o[e]=a[e])},k=async a=>{const e=await I({id:a.id});c(e)},R=()=>{i("close")};return V({open:g,setFormData:c,getDetail:k}),(a,e)=>{const d=D,n=U,y=h,E=B,C=j;return M(),T("div",Z,[l(N,{ref_key:"popupRef",ref:m,title:t(v),async:!0,width:"550px",onConfirm:x,onClose:R},{default:r(()=>[l(C,{ref_key:"formRef",ref:p,model:t(o),"label-width":"84px",rules:w},{default:r(()=>[l(n,{label:"岗位名称",prop:"name"},{default:r(()=>[l(d,{modelValue:t(o).name,"onUpdate:modelValue":e[0]||(e[0]=s=>t(o).name=s),placeholder:"请输入岗位名称",clearable:"",maxlength:100},null,8,["modelValue"])]),_:1}),l(n,{label:"岗位编码",prop:"code"},{default:r(()=>[l(d,{modelValue:t(o).code,"onUpdate:modelValue":e[1]||(e[1]=s=>t(o).code=s),placeholder:"请输入岗位编码",clearable:""},null,8,["modelValue"])]),_:1}),l(n,{label:"排序",prop:"sort"},{default:r(()=>[_("div",null,[l(y,{modelValue:t(o).sort,"onUpdate:modelValue":e[2]||(e[2]=s=>t(o).sort=s),min:0,max:9999},null,8,["modelValue"]),e[5]||(e[5]=_("div",{class:"form-tips"},"默认为0， 数值越大越排前",-1))])]),_:1}),l(n,{label:"备注",prop:"remark"},{default:r(()=>[l(d,{modelValue:t(o).remark,"onUpdate:modelValue":e[3]||(e[3]=s=>t(o).remark=s),placeholder:"请输入备注",type:"textarea",autosize:{minRows:4,maxRows:6},maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1}),l(n,{label:"岗位状态",required:"",prop:"status"},{default:r(()=>[l(E,{modelValue:t(o).status,"onUpdate:modelValue":e[4]||(e[4]=s=>t(o).status=s),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{O as _};
