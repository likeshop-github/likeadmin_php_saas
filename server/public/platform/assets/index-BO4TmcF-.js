import{C as E,D as m,E as D,_ as B}from"./index-DdVBHfb8.js";import{g as z,F as V}from"./element-plus-D_drhFLK.js";import{u as N}from"./@vueuse-DE_336rM.js";import{H as h}from"./vue-echarts-5qAlUj9S.js";import{u as g}from"./getExposeType-C5XerQxt.js";import{d as O,r as R,w,Z as F,f as M,ah as T,o as x,c as _,a as t,V as n,M as l,T as r,u as s,S as b,U as W,aa as G}from"./@vue-TMcuEboY.js";import"./nprogress-Cgf5DU8x.js";import"./balanced-match-mNcR6oh4.js";import"./vue-router-CZY6S6gL.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./@element-plus-C2WBhajb.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./dayjs-CMfar2R3.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./resize-detector-G6vbKCU7.js";const H={class:"workbench"},L={class:"lg:flex"},U={class:"flex leading-9"},Z={class:"flex leading-9"},j={class:"flex leading-9"},q=["href"],I=["href"],J={class:"text-tx-secondary text-xs ml-4"},K={class:"flex flex-wrap"},P={class:"w-1/2 md:w-1/4"},Q={class:"text-6xl"},X={class:"text-tx-secondary text-xs"},Y={class:"w-1/2 md:w-1/4"},$={class:"text-6xl"},tt={class:"text-tx-secondary text-xs"},ot={class:"w-1/2 md:w-1/4"},et={class:"text-6xl"},st={class:"text-tx-secondary text-xs"},at={class:"w-1/2 md:w-1/4"},it={class:"text-6xl"},lt={class:"text-tx-secondary text-xs"},rt={class:"function mb-4"},nt={class:"flex flex-wrap"},dt={class:"mt-2"},pt={class:"lg:flex gap-4"},ct=O({name:"workbench"}),Jt=O({...ct,setup(ut){const u=E(),v=g(),f=g(),S=N(),i=R(S.value?"#ffffff":u.theme);w(()=>u.theme,()=>{y()}),w(()=>u.mode,a=>{i.value=a==="light"?u.theme:"#ffffff",y()});const e=F({version:{version:"",website:"",based:"",channel:{gitee:"",website:""}},support:[],today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[]},yAxis:{type:"value"},legend:{data:["访问量"]},tooltip:{trigger:"axis"},series:[{name:"访问量",data:[],type:"line",smooth:!0,color:i.value,lineStyle:{color:i.value,width:2},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:i.value},{offset:1,color:i.value}]},opacity:.1}}]},saleOption:{xAxis:{type:"category",data:[]},yAxis:{type:"value",name:"单位（万）"},tooltip:{trigger:"axis"},series:[{name:"销售量",data:[],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)",borderRadius:[10,10,0,0]},barWidth:"40%",itemStyle:{borderRadius:[10,10,0,0],color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:m(i.value,.7)},{offset:1,color:i.value}]}}}]}}),k=()=>{D().then(a=>{e.version=a.version,e.today=a.today,e.menu=a.menu,e.visitor=a.visitor,e.support=a.support,e.visitorOption.xAxis.data=[],e.visitorOption.series[0].data=[],e.saleOption.xAxis.data=[],e.saleOption.series[0].data=[],a.visitor.date.reverse().forEach(o=>{e.visitorOption.xAxis.data.push(o)}),a.visitor.list[0].data.forEach(o=>{e.visitorOption.series[0].data.push(o)}),a.sale.date.reverse().forEach(o=>{e.saleOption.xAxis.data.push(o)}),a.sale.list[0].data.forEach(o=>{o<=50&&(o={value:o,itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:m("#ff8729",.7)},{offset:1,color:"#ff8729"}]}}}),e.saleOption.series[0].data.push(o)})}).catch(a=>{console.log("err",a)})},y=()=>{var a,o,c,d;e.visitorOption.series[0].color=i.value,e.visitorOption.series[0].lineStyle.color=i.value,e.visitorOption.series[0].areaStyle.color.colorStops=[{offset:0,color:i.value},{offset:1,color:i.value}],e.saleOption.series[0].itemStyle.color.colorStops=[{offset:0,color:m(i.value,.7)},{offset:1,color:i.value}],(a=v.value)==null||a.clear(),(o=f.value)==null||o.clear(),(c=v.value)==null||c.setOption(e.saleOption),(d=f.value)==null||d.setOption(e.visitorOption)};return M(()=>{k()}),(a,o)=>{const c=z,d=V,C=B,A=T("router-link");return x(),_("div",H,[t("div",L,[n(d,{class:"!border-none mb-4 lg:mr-4 lg:w-[350px]",shadow:"never"},{header:l(()=>o[0]||(o[0]=[t("span",{class:"card-title"},"版本信息",-1)])),default:l(()=>[t("div",null,[t("div",U,[o[1]||(o[1]=t("div",{class:"w-20"},"平台名称",-1)),t("span",null,r(s(e).version.name),1)]),t("div",Z,[o[2]||(o[2]=t("div",{class:"w-20"},"当前版本",-1)),t("span",null,r(s(e).version.version),1)]),t("div",j,[o[5]||(o[5]=t("div",{class:"w-20"},"获取渠道",-1)),t("div",null,[t("a",{href:s(e).version.channel.website,target:"_blank"},[n(c,{type:"info",size:"small"},{default:l(()=>o[3]||(o[3]=[b("官网")])),_:1})],8,q),t("a",{class:"ml-3",href:s(e).version.channel.gitee,target:"_blank"},[n(c,{type:"primary",size:"small"},{default:l(()=>o[4]||(o[4]=[b("Gitee")])),_:1})],8,I)])])])]),_:1}),n(d,{class:"!border-none mb-4 flex-1",shadow:"never"},{header:l(()=>[t("div",null,[o[6]||(o[6]=t("span",{class:"card-title"},"今日数据",-1)),t("span",J," 更新时间："+r(s(e).today.time),1)])]),default:l(()=>[t("div",K,[t("div",P,[o[7]||(o[7]=t("div",{class:"leading-10"},"销售额",-1)),t("div",Q,r(s(e).today.today_sales),1),t("div",X," 总："+r(s(e).today.total_sales),1)]),t("div",Y,[o[8]||(o[8]=t("div",{class:"leading-10"},"成交订单",-1)),t("div",$,r(s(e).today.order_num),1),t("div",tt," 总："+r(s(e).today.order_sum),1)]),t("div",ot,[o[9]||(o[9]=t("div",{class:"leading-10"},"新增用户",-1)),t("div",et,r(s(e).today.today_new_user),1),t("div",st," 总："+r(s(e).today.total_new_user),1)]),t("div",at,[o[10]||(o[10]=t("div",{class:"leading-10"},"租户数量",-1)),t("div",it,r(s(e).today.today_visitor),1),t("div",lt," 总："+r(s(e).today.total_visitor),1)])])]),_:1})]),t("div",rt,[n(d,{class:"flex-1 !border-none",shadow:"never"},{header:l(()=>o[11]||(o[11]=[t("span",null,"常用功能",-1)])),default:l(()=>[t("div",nt,[(x(!0),_(W,null,G(s(e).menu,p=>(x(),_("div",{class:"md:w-[12.5%] w-1/4 flex flex-col items-center",key:p},[n(A,{to:p.url,class:"mb-3 flex flex-col items-center"},{default:l(()=>[n(C,{width:"40px",height:"40px",src:p==null?void 0:p.image},null,8,["src"]),t("div",dt,r(p.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})]),t("div",pt,[n(d,{class:"!border-none mb-4 lg:mb-0 w-full lg:w-2/3",shadow:"never"},{header:l(()=>o[12]||(o[12]=[t("span",null,"访问量趋势图",-1)])),default:l(()=>[t("div",null,[n(s(h),{ref_key:"visitorChart",ref:f,style:{height:"350px"},option:s(e).visitorOption,autoresize:!0},null,8,["option"])])]),_:1}),n(d,{class:"!border-none w-full lg:w-1/3",shadow:"never"},{header:l(()=>o[13]||(o[13]=[t("span",null,"销售额趋势图",-1)])),default:l(()=>[t("div",null,[n(s(h),{ref_key:"saleChart",ref:v,style:{height:"350px"},option:s(e).saleOption,autoresize:!0},null,8,["option"])])]),_:1})])])}}});export{Jt as default};
