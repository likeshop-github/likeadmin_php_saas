import{D as P,U,B as q,r as H,C as I,O as Z}from"./element-plus-CSiqOtzA.js";import{m as j}from"./menu-VVEAZWb5.js";import{c as z}from"./role-Cai7G6Sj.js";import{P as G}from"./index-D6Od-rUl.js";import{t as J}from"./index-wB8vo7oM.js";import{d as Q,s as f,r,Z as W,o as k,c as X,V as s,M as d,O as Y,L as $,u as c,a as y,i as ee,n as x}from"./@vue-TMcuEboY.js";const te={class:"edit-popup"},ie=Q({__name:"auth",emits:["success","close"],setup(le,{expose:C,emit:b}){const _=b,o=f(),h=f(),u=f(),g=r(!1),i=r(!0),m=r(!1),v=r([]),p=r([]),a=W({id:"",name:"",desc:"",sort:0,menu_id:[]}),E={name:[{required:!0,message:"请输入名称",trigger:["blur"]}]},w=()=>{m.value=!0,j().then(e=>{p.value=e,v.value=J(e),x(()=>{A()}),m.value=!1})},R=()=>{var l,n;const e=(l=o.value)==null?void 0:l.getCheckedKeys(),t=(n=o.value)==null?void 0:n.getHalfCheckedKeys();return e==null||e.unshift.apply(e,t),e},A=()=>{a.menu_id.forEach(e=>{x(()=>{var t;(t=o.value)==null||t.setChecked(e,!0,!1)})})},D=e=>{const t=p.value;for(let l=0;l<t.length;l++)o.value.store.nodesMap[t[l].id].expanded=e},K=e=>{var t,l;e?(t=o.value)==null||t.setCheckedKeys(v.value.map(n=>n.id)):(l=o.value)==null||l.setCheckedKeys([])},V=async()=>{var e,t;await((e=h.value)==null?void 0:e.validate()),a.menu_id=R(),await z(a),(t=u.value)==null||t.close(),_("success")},B=()=>{_("close")},S=()=>{var e;(e=u.value)==null||e.open()},T=async e=>{for(const t in a)e[t]!=null&&e[t]!=null&&(a[t]=e[t])};return w(),C({open:S,setFormData:T}),(e,t)=>{const l=P,n=U,F=q,L=H,O=I,M=Z;return k(),X("div",te,[s(G,{ref_key:"popupRef",ref:u,title:"分配权限",async:!0,width:"550px",onConfirm:V,onClose:B},{default:d(()=>[Y((k(),$(O,{class:"ls-form",ref_key:"formRef",ref:h,rules:E,model:c(a),"label-width":"60px"},{default:d(()=>[s(L,{class:"h-[400px] sm:h-[600px]"},{default:d(()=>[s(F,{label:"权限",prop:"menu_id"},{default:d(()=>[y("div",null,[s(l,{label:"展开/折叠",onChange:D}),s(l,{label:"全选/不全选",onChange:K}),s(l,{modelValue:c(i),"onUpdate:modelValue":t[0]||(t[0]=N=>ee(i)?i.value=N:null),label:"父子联动"},null,8,["modelValue"]),y("div",null,[s(n,{ref_key:"treeRef",ref:o,data:c(p),props:{label:"name",children:"children"},"check-strictly":!c(i),"node-key":"id","default-expand-all":c(g),"show-checkbox":""},null,8,["data","check-strictly","default-expand-all"])])])]),_:1})]),_:1})]),_:1},8,["model"])),[[M,c(m)]])]),_:1},512)])}}});export{ie as _};
