import{_ as $}from"./index-CUZIfJRX.js";import{N as z,I as F,B as L,C as S,O as T,P as j,g as A,G,H,D as M,h as P}from"./element-plus-B9ALq7eR.js";import{_ as Z}from"./index.vue_vue_type_style_index_0_lang-BId8y2aD.js";import{_ as J}from"./picker-DRQPy4Fb.js";import{g as K,h as Q,i as W,j as X}from"./article-QUwLGYEj.js";import{u as Y}from"./useDictOptions-Cq8AoGIE.js";import{e as ee}from"./index-Dnfu0Fmw.js";import{u as te,a as oe}from"./vue-router-D4MxfuQi.js";import{d as v,Z as V,s as le,o as u,c as w,V as t,M as r,u as a,a as i,U as ae,aa as re,L as ie,S as p}from"./@vue-TMcuEboY.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-BZaexRrS.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./@wangeditor-BvvNszpm.js";import"./index-C-QCDPmx.js";import"./index-DIJjgwt5.js";import"./index.vue_vue_type_script_setup_true_lang-B-ov7tNf.js";import"./index-Bgj7rSdd.js";import"./index-B1hKh7eA.js";import"./index.vue_vue_type_script_setup_true_lang-Be0Cw8SV.js";import"./@vueuse-BQYVjZ5N.js";import"./usePaging-DFi_nJOG.js";import"./vue3-video-play-xg7gp0Bu.js";import"./vuedraggable-OYPBN08G.js";import"./vue-CHxGqOme.js";import"./sortablejs-DdgKbxid.js";import"./nprogress-Cgf5DU8x.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";const se={class:"article-edit"},ne={class:"xl:flex"},me={class:"w-80"},de={class:"w-80"},ue={class:"w-80"},pe={class:"w-80"},_e={class:"xl:ml-20"},ce=v({name:"articleListsEdit"}),dt=v({...ce,setup(fe){const d=te(),g=oe(),o=V({id:"",title:"",image:"",cid:"",desc:"",author:"",content:"",click_virtual:0,sort:0,is_show:1,abstract:""}),{removeTab:x}=ee(),_=le(),E=V({title:[{required:!0,message:"请输入文章标题",trigger:"blur"}],cid:[{required:!0,message:"请选择文章栏目",trigger:"blur"}]}),k=async()=>{const n=await K({id:d.query.id});Object.keys(o).forEach(e=>{o[e]=n[e]})},{optionsData:R}=Y({article_cate:{api:Q}}),y=async()=>{var n;await((n=_.value)==null?void 0:n.validate()),d.query.id?await W(o):await X(o),x(),g.back()};return d.query.id&&k(),(n,e)=>{const U=z,c=F,m=L,s=S,h=T,B=j,q=J,f=A,b=G,C=H,D=Z,N=M,I=P,O=$;return u(),w("div",se,[t(c,{class:"!border-none",shadow:"never"},{default:r(()=>[t(U,{content:n.$route.meta.title,onBack:e[0]||(e[0]=l=>n.$router.back())},null,8,["content"])]),_:1}),t(c,{class:"mt-4 !border-none",shadow:"never"},{default:r(()=>[t(N,{ref_key:"formRef",ref:_,class:"ls-form",model:a(o),"label-width":"85px",rules:a(E)},{default:r(()=>[i("div",ne,[i("div",null,[t(s,{label:"文章标题",prop:"title"},{default:r(()=>[i("div",me,[t(m,{modelValue:a(o).title,"onUpdate:modelValue":e[1]||(e[1]=l=>a(o).title=l),placeholder:"请输入文章标题",type:"textarea",autosize:{minRows:3,maxRows:3},maxlength:"64","show-word-limit":"",clearable:""},null,8,["modelValue"])])]),_:1}),t(s,{label:"文章栏目",prop:"cid"},{default:r(()=>[t(B,{class:"w-80",modelValue:a(o).cid,"onUpdate:modelValue":e[2]||(e[2]=l=>a(o).cid=l),placeholder:"请选择文章栏目",clearable:""},{default:r(()=>[(u(!0),w(ae,null,re(a(R).article_cate,l=>(u(),ie(h,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"文章简介",prop:"desc"},{default:r(()=>[i("div",de,[t(m,{modelValue:a(o).desc,"onUpdate:modelValue":e[3]||(e[3]=l=>a(o).desc=l),placeholder:"请输入文章简介",type:"textarea",autosize:{minRows:3,maxRows:6},maxlength:200,"show-word-limit":"",clearable:""},null,8,["modelValue"])])]),_:1}),t(s,{label:"摘要",prop:"abstract"},{default:r(()=>[i("div",ue,[t(m,{type:"textarea",autosize:{minRows:6,maxRows:6},modelValue:a(o).abstract,"onUpdate:modelValue":e[4]||(e[4]=l=>a(o).abstract=l),maxlength:"200","show-word-limit":"",clearable:""},null,8,["modelValue"])])]),_:1}),t(s,{label:"文章封面",prop:"image"},{default:r(()=>[i("div",null,[i("div",null,[t(q,{modelValue:a(o).image,"onUpdate:modelValue":e[5]||(e[5]=l=>a(o).image=l),limit:1},null,8,["modelValue"])]),e[11]||(e[11]=i("div",{class:"form-tips"},"建议尺寸：240*180px",-1))])]),_:1}),t(s,{label:"作者",prop:"author"},{default:r(()=>[i("div",pe,[t(m,{modelValue:a(o).author,"onUpdate:modelValue":e[6]||(e[6]=l=>a(o).author=l),placeholder:"请输入作者名称"},null,8,["modelValue"])])]),_:1}),t(s,{label:"排序",prop:"sort"},{default:r(()=>[i("div",null,[t(f,{modelValue:a(o).sort,"onUpdate:modelValue":e[7]||(e[7]=l=>a(o).sort=l),min:0,max:9999},null,8,["modelValue"]),e[12]||(e[12]=i("div",{class:"form-tips"},"默认为0， 数值越大越排前",-1))])]),_:1}),t(s,{label:"初始浏览量",prop:"click_virtual"},{default:r(()=>[i("div",null,[t(f,{modelValue:a(o).click_virtual,"onUpdate:modelValue":e[8]||(e[8]=l=>a(o).click_virtual=l),min:0},null,8,["modelValue"])])]),_:1}),t(s,{label:"文章状态",required:"",prop:"is_show"},{default:r(()=>[t(C,{modelValue:a(o).is_show,"onUpdate:modelValue":e[9]||(e[9]=l=>a(o).is_show=l)},{default:r(()=>[t(b,{value:1},{default:r(()=>e[13]||(e[13]=[p("显示")])),_:1}),t(b,{value:0},{default:r(()=>e[14]||(e[14]=[p("隐藏")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),i("div",_e,[t(s,{label:"文章内容",prop:"content"},{default:r(()=>[t(D,{modelValue:a(o).content,"onUpdate:modelValue":e[10]||(e[10]=l=>a(o).content=l),height:667,width:375},null,8,["modelValue"])]),_:1})])])]),_:1},8,["model","rules"])]),_:1}),t(O,null,{default:r(()=>[t(I,{type:"primary",onClick:y},{default:r(()=>e[15]||(e[15]=[p("保存")])),_:1})]),_:1})])}}});export{dt as default};
