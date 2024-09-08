import{G as M,C as G,D as H,H as L,I as W,f as X,F as z}from"./element-plus.557400d8.js";import{M as J}from"./picker.9a7938a2.js";import{u as K,a as Q,g as Y}from"./consumer.e6770e1a.js";import{d as Z}from"./department.1620a95f.js";import{j as $}from"./post.1a2b152d.js";import{r as ee}from"./role.383b039d.js";import{P as ue}from"./index.7839eef4.js";import{u as le}from"./useDictOptions.59caf492.js";import{d as ae,s as D,r as y,b as oe,a1 as te,o as n,c as B,X as o,P as r,u as l,a as p,W as x,a8 as j,O as m,T as U}from"./@vue.54440ad7.js";const re={class:"edit-popup"},de=p("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100px\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),se=p("div",{class:"form-tips"},"\u5141\u8BB8\u591A\u4EBA\u540C\u65F6\u5728\u7EBF\u767B\u5F55",-1),ve=ae({__name:"edit",props:{tenant_id:{type:Number,default:0}},emits:["refresh","close"],setup(k,{expose:R,emit:h}){const i=k,v=h,V=D(),_=D(),c=y("add"),q=oe(()=>c.value=="edit"?"\u7F16\u8F91\u7BA1\u7406\u5458":"\u65B0\u589E\u7BA1\u7406\u5458"),e=y({id:"",account:"",name:"",dept_id:[],jobs_id:[],role_id:[],avatar:"",password:"",password_confirm:"",disable:0,multipoint_login:1,root:0}),E=(s,u,t)=>{e.value.password&&(u||t(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801")),u!==e.value.password&&t(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!"))),t()},f=te({account:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:["blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}],role_id:[{required:!0,validator:(s,u,t)=>{e.value.root||e.value.role_id.length?t():t(new Error("\u8BF7\u9009\u62E9\u89D2\u8272"))}}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:["blur"]}],password_confirm:[{required:!0,message:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",trigger:["blur"]},{validator:E,trigger:"blur"}]}),{optionsData:F}=le({role:{api:ee,params:{tenant_id:i.tenant_id}},jobs:{api:$,params:{tenant_id:i.tenant_id}},dept:{api:Z,params:{tenant_id:i.tenant_id}}}),I=async()=>{var s,u;await((s=V.value)==null?void 0:s.validate()),c.value=="edit"?await K({...e.value,tenant_id:i.tenant_id}):await Q({...e.value,tenant_id:i.tenant_id}),(u=_.value)==null||u.close(),v("refresh")},N=(s="add",u)=>{var t;u&&w(u),c.value=s,(t=_.value)==null||t.open()},w=async s=>{f.password=[],f.password_confirm=[{validator:E,trigger:"blur"}];const u=await Y({id:s,tenant_id:i.tenant_id});e.value=u},P=()=>{v("close")};return R({open:N,setFormData:w}),(s,u)=>{const t=G,d=H,S=J,T=M,g=L,C=W,A=X,O=z;return n(),B("div",re,[o(ue,{"destroy-on-close":"",ref_key:"popupRef",ref:_,title:l(q),async:!0,width:"550px",onConfirm:I,onClose:P},{default:r(()=>[o(O,{ref_key:"formRef",ref:V,model:l(e),"label-width":"84px",rules:l(f)},{default:r(()=>[o(d,{label:"\u8D26\u53F7",prop:"account"},{default:r(()=>[o(t,{modelValue:l(e).account,"onUpdate:modelValue":u[0]||(u[0]=a=>l(e).account=a),disabled:l(e).root==1,placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7",clearable:""},null,8,["modelValue","disabled"])]),_:1}),o(d,{label:"\u5934\u50CF"},{default:r(()=>[p("div",null,[p("div",null,[o(S,{modelValue:l(e).avatar,"onUpdate:modelValue":u[1]||(u[1]=a=>l(e).avatar=a),limit:1},null,8,["modelValue"])]),de])]),_:1}),o(d,{label:"\u540D\u79F0",prop:"name"},{default:r(()=>[o(t,{modelValue:l(e).name,"onUpdate:modelValue":u[2]||(u[2]=a=>l(e).name=a),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),o(d,{label:"\u5F52\u5C5E\u90E8\u95E8",prop:"dept_id"},{default:r(()=>[o(T,{class:"flex-1",modelValue:l(e).dept_id,"onUpdate:modelValue":u[3]||(u[3]=a=>l(e).dept_id=a),data:l(F).dept,clearable:"",multiple:"","node-key":"id",props:{value:"id",label:"name",disabled(a){return a.status!==1}},"check-strictly":"","default-expand-all":!0,placeholder:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8"},null,8,["modelValue","data","props"])]),_:1}),o(d,{label:"\u5C97\u4F4D",prop:"jobs_id"},{default:r(()=>[o(C,{class:"flex-1",modelValue:l(e).jobs_id,"onUpdate:modelValue":u[4]||(u[4]=a=>l(e).jobs_id=a),clearable:"",multiple:"",placeholder:"\u8BF7\u9009\u62E9\u5C97\u4F4D"},{default:r(()=>[(n(!0),B(x,null,j(l(F).jobs,(a,b)=>(n(),m(g,{key:b,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(e).root!=1?(n(),m(d,{key:0,label:"\u89D2\u8272",prop:"role_id"},{default:r(()=>[o(C,{modelValue:l(e).role_id,"onUpdate:modelValue":u[5]||(u[5]=a=>l(e).role_id=a),disabled:l(e).root==1,class:"flex-1",multiple:"",placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272",clearable:""},{default:r(()=>[(n(!0),B(x,null,j(l(F).role,(a,b)=>(n(),m(g,{key:b,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1})):U("",!0),o(d,{label:"\u5BC6\u7801",prop:"password"},{default:r(()=>[o(t,{modelValue:l(e).password,"onUpdate:modelValue":u[6]||(u[6]=a=>l(e).password=a),"show-password":"",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),o(d,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"password_confirm"},{default:r(()=>[o(t,{modelValue:l(e).password_confirm,"onUpdate:modelValue":u[7]||(u[7]=a=>l(e).password_confirm=a),"show-password":"",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),l(e).root!=1?(n(),m(d,{key:1,label:"\u7BA1\u7406\u5458\u72B6\u6001"},{default:r(()=>[o(A,{modelValue:l(e).disable,"onUpdate:modelValue":u[8]||(u[8]=a=>l(e).disable=a),"active-value":0,"inactive-value":1},null,8,["modelValue"])]),_:1})):U("",!0),o(d,{label:"\u591A\u5904\u767B\u5F55"},{default:r(()=>[p("div",null,[o(A,{modelValue:l(e).multipoint_login,"onUpdate:modelValue":u[9]||(u[9]=a=>l(e).multipoint_login=a),"active-value":1,"inactive-value":0},null,8,["modelValue"]),se])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title"])])}}});export{ve as _};
