import{A as L,B as Z,M as h,N as z,O as G,e as H,C as J}from"./element-plus-D_drhFLK.js";import{M as K}from"./picker-D0AOqF9l.js";import{f as Q,h as W,i as X}from"./consumer-7M4Jjmf_.js";import{d as Y}from"./department-vH7RMOqZ.js";import{j as $}from"./post-OOGTfCuj.js";import{r as ee}from"./role-BoAvCPZm.js";import{P as le}from"./index-Cj8a6AtC.js";import{u as ae}from"./useDictOptions-D6z3mSr2.js";import{d as oe,s as j,r as k,b as te,Z as re,o as i,c as w,V as t,M as d,u as a,a as p,U as A,aa as C,L as m,R}from"./@vue-TMcuEboY.js";const de={class:"edit-popup"},ve=oe({__name:"edit",props:{tenant_id:{type:Number,default:0}},emits:["refresh","close"],setup(q,{expose:B,emit:D}){const u=q,F=D,f=j(),_=j(),c=k("add"),N=te(()=>c.value=="edit"?"编辑管理员":"新增管理员"),l=k({id:"",account:"",name:"",dept_id:[],jobs_id:[],role_id:[],avatar:"",password:"",password_confirm:"",disable:0,multipoint_login:1,root:0}),g=(s,e,r)=>{l.value.password&&(e||r(new Error("请再次输入密码")),e!==l.value.password&&r(new Error("两次输入密码不一致!"))),r()},b=re({account:[{required:!0,message:"请输入账号",trigger:["blur"]}],name:[{required:!0,message:"请输入名称",trigger:["blur"]}],role_id:[{required:!0,validator:(s,e,r)=>{l.value.root||l.value.role_id.length?r():r(new Error("请选择角色"))}}],password:[{required:!0,message:"请输入密码",trigger:["blur"]}],password_confirm:[{required:!0,message:"请输入确认密码",trigger:["blur"]},{validator:g,trigger:"blur"}]}),{optionsData:v}=ae({role:{api:ee,params:{tenant_id:u.tenant_id}},jobs:{api:$,params:{tenant_id:u.tenant_id}},dept:{api:Y,params:{tenant_id:u.tenant_id}}}),I=async()=>{var s,e;await((s=f.value)==null?void 0:s.validate()),c.value=="edit"?await Q({...l.value,tenant_id:u.tenant_id}):await W({...l.value,tenant_id:u.tenant_id}),(e=_.value)==null||e.close(),F("refresh")},M=(s="add",e)=>{var r;e&&y(e),c.value=s,(r=_.value)==null||r.open()},y=async s=>{b.password=[],b.password_confirm=[{validator:g,trigger:"blur"}];const e=await X({id:s,tenant_id:u.tenant_id});l.value=e},S=()=>{var s;(s=f.value)==null||s.resetFields()};return B({open:M,setFormData:y}),(s,e)=>{const r=L,n=Z,O=K,P=h,E=z,x=G,U=H,T=J;return i(),w("div",de,[t(le,{ref_key:"popupRef",ref:_,title:a(N),async:!0,width:"550px",onConfirm:I,onClose:S},{default:d(()=>[t(T,{ref_key:"formRef",ref:f,model:a(l),"label-width":"84px",rules:a(b)},{default:d(()=>[t(n,{label:"账号",prop:"account"},{default:d(()=>[t(r,{modelValue:a(l).account,"onUpdate:modelValue":e[0]||(e[0]=o=>a(l).account=o),disabled:a(l).root==1,placeholder:"请输入账号",clearable:""},null,8,["modelValue","disabled"])]),_:1}),t(n,{label:"头像"},{default:d(()=>[p("div",null,[p("div",null,[t(O,{modelValue:a(l).avatar,"onUpdate:modelValue":e[1]||(e[1]=o=>a(l).avatar=o),limit:1},null,8,["modelValue"])]),e[10]||(e[10]=p("div",{class:"form-tips"},"建议尺寸：100*100px，支持jpg，jpeg，png格式",-1))])]),_:1}),t(n,{label:"名称",prop:"name"},{default:d(()=>[t(r,{modelValue:a(l).name,"onUpdate:modelValue":e[2]||(e[2]=o=>a(l).name=o),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])]),_:1}),t(n,{label:"归属部门",prop:"dept_id"},{default:d(()=>[t(P,{class:"flex-1",modelValue:a(l).dept_id,"onUpdate:modelValue":e[3]||(e[3]=o=>a(l).dept_id=o),data:a(v).dept,clearable:"",multiple:"","node-key":"id",props:{value:"id",label:"name",disabled(o){return o.status!==1}},"check-strictly":"","default-expand-all":!0,placeholder:"请选择上级部门"},null,8,["modelValue","data","props"])]),_:1}),t(n,{label:"岗位",prop:"jobs_id"},{default:d(()=>[t(x,{class:"flex-1",modelValue:a(l).jobs_id,"onUpdate:modelValue":e[4]||(e[4]=o=>a(l).jobs_id=o),clearable:"",multiple:"",placeholder:"请选择岗位"},{default:d(()=>[(i(!0),w(A,null,C(a(v).jobs,(o,V)=>(i(),m(E,{key:V,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(l).root!=1?(i(),m(n,{key:0,label:"角色",prop:"role_id"},{default:d(()=>[t(x,{modelValue:a(l).role_id,"onUpdate:modelValue":e[5]||(e[5]=o=>a(l).role_id=o),disabled:a(l).root==1,class:"flex-1",multiple:"",placeholder:"请选择角色",clearable:""},{default:d(()=>[(i(!0),w(A,null,C(a(v).role,(o,V)=>(i(),m(E,{key:V,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1})):R("",!0),t(n,{label:"密码",prop:"password"},{default:d(()=>[t(r,{modelValue:a(l).password,"onUpdate:modelValue":e[6]||(e[6]=o=>a(l).password=o),"show-password":"",clearable:"",placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),t(n,{label:"确认密码",prop:"password_confirm"},{default:d(()=>[t(r,{modelValue:a(l).password_confirm,"onUpdate:modelValue":e[7]||(e[7]=o=>a(l).password_confirm=o),"show-password":"",clearable:"",placeholder:"请输入确认密码"},null,8,["modelValue"])]),_:1}),a(l).root!=1?(i(),m(n,{key:1,label:"管理员状态"},{default:d(()=>[t(U,{modelValue:a(l).disable,"onUpdate:modelValue":e[8]||(e[8]=o=>a(l).disable=o),"active-value":0,"inactive-value":1},null,8,["modelValue"])]),_:1})):R("",!0),t(n,{label:"多处登录"},{default:d(()=>[p("div",null,[t(U,{modelValue:a(l).multipoint_login,"onUpdate:modelValue":e[9]||(e[9]=o=>a(l).multipoint_login=o),"active-value":1,"inactive-value":0},null,8,["modelValue"]),e[11]||(e[11]=p("div",{class:"form-tips"},"允许多人同时在线登录",-1))])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title"])])}}});export{ve as _};
