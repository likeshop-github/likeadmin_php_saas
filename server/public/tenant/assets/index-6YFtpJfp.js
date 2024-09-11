import{h as C,y as v,z as A,_ as E}from"./index-BVdlijz7.js";import{h as z,I as B}from"./element-plus-BBKw480Q.js";import{H as _}from"./vue-echarts-CfLZNedP.js";import{r as V,d as g,w as D,Z as N,f as R,ah as M,o as f,c as x,a as t,V as n,M as r,T as l,u as s,S as h,U as T,aa as W}from"./@vue-pHjCrgw6.js";import"./nprogress-Cgf5DU8x.js";import"./balanced-match-mNcR6oh4.js";import"./vue-router-DAYuzRuG.js";import"./pinia-CJRVDLHa.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-djZFs-WH.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./@element-plus-DMfktWgm.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-D4DIzBxc.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./dayjs-CMfar2R3.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./resize-detector-G6vbKCU7.js";const y=w=>V(),F={class:"workbench"},G={class:"lg:flex"},H={class:"flex leading-9"},I={class:"flex leading-9"},L={class:"flex leading-9"},U=["href"],Z=["href"],j={class:"text-tx-secondary text-xs ml-4"},q={class:"flex flex-wrap"},J={class:"w-1/2 md:w-1/4"},K={class:"text-6xl"},P={class:"text-tx-secondary text-xs"},Q={class:"w-1/2 md:w-1/4"},X={class:"text-6xl"},Y={class:"text-tx-secondary text-xs"},$={class:"w-1/2 md:w-1/4"},tt={class:"text-6xl"},ot={class:"text-tx-secondary text-xs"},et={class:"w-1/2 md:w-1/4"},st={class:"text-6xl"},it={class:"text-tx-secondary text-xs"},at={class:"function mb-4"},rt={class:"flex flex-wrap"},lt={class:"mt-2"},nt={class:"lg:flex gap-4"},dt=g({name:"workbench"}),Ut=g({...dt,setup(w){const a=C(),m=y(),u=y();D(()=>a.theme,()=>{O()});const e=N({version:{version:"",website:"",based:"",channel:{gitee:"",website:""}},support:[],today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[]},yAxis:{type:"value"},legend:{data:["访问量"]},tooltip:{trigger:"axis"},series:[{name:"访问量",data:[],type:"line",smooth:!0,color:a.theme,lineStyle:{color:a.theme,width:2},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:a.theme},{offset:1,color:a.theme}]},opacity:.1}}]},saleOption:{xAxis:{type:"category",data:[]},yAxis:{type:"value",name:"单位（万）"},tooltip:{trigger:"axis"},series:[{name:"销售量",data:[],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)",borderRadius:[10,10,0,0]},barWidth:"40%",itemStyle:{borderRadius:[10,10,0,0],color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:v(a.theme,.7)},{offset:1,color:a.theme}]}}}]}}),b=()=>{A().then(i=>{e.version=i.version,e.today=i.today,e.menu=i.menu,e.visitor=i.visitor,e.support=i.support,e.visitorOption.xAxis.data=[],e.visitorOption.series[0].data=[],e.saleOption.xAxis.data=[],e.saleOption.series[0].data=[],i.visitor.date.reverse().forEach(o=>{e.visitorOption.xAxis.data.push(o)}),i.visitor.list[0].data.forEach(o=>{e.visitorOption.series[0].data.push(o)}),i.sale.date.reverse().forEach(o=>{e.saleOption.xAxis.data.push(o)}),i.sale.list[0].data.forEach(o=>{o<=50&&(o={value:o,itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:v("#ff8729",.7)},{offset:1,color:"#ff8729"}]}}}),e.saleOption.series[0].data.push(o)})}).catch(i=>{console.log("err",i)})},O=()=>{var i,o,c,d;e.visitorOption.series[0].color=a.theme,e.visitorOption.series[0].lineStyle.color=a.theme,e.visitorOption.series[0].areaStyle.color.colorStops=[{offset:0,color:a.theme},{offset:1,color:a.theme}],e.saleOption.series[0].itemStyle.color.colorStops=[{offset:0,color:v(a.theme,.7)},{offset:1,color:a.theme}],(i=m.value)==null||i.clear(),(o=u.value)==null||o.clear(),(c=m.value)==null||c.setOption(e.saleOption),(d=u.value)==null||d.setOption(e.visitorOption)};return R(()=>{b()}),(i,o)=>{const c=z,d=B,S=E,k=M("router-link");return f(),x("div",F,[t("div",G,[n(d,{class:"!border-none mb-4 lg:mr-4 lg:w-[350px]",shadow:"never"},{header:r(()=>o[0]||(o[0]=[t("span",{class:"card-title"},"版本信息",-1)])),default:r(()=>[t("div",null,[t("div",H,[o[1]||(o[1]=t("div",{class:"w-20"},"平台名称",-1)),t("span",null,l(s(e).version.name),1)]),t("div",I,[o[2]||(o[2]=t("div",{class:"w-20"},"当前版本",-1)),t("span",null,l(s(e).version.version),1)]),t("div",L,[o[5]||(o[5]=t("div",{class:"w-20"},"获取渠道",-1)),t("div",null,[t("a",{href:s(e).version.channel.website,target:"_blank"},[n(c,{type:"success",size:"small"},{default:r(()=>o[3]||(o[3]=[h("官网")])),_:1})],8,U),t("a",{class:"ml-3",href:s(e).version.channel.gitee,target:"_blank"},[n(c,{type:"danger",size:"small"},{default:r(()=>o[4]||(o[4]=[h("Gitee")])),_:1})],8,Z)])])])]),_:1}),n(d,{class:"!border-none mb-4 flex-1",shadow:"never"},{header:r(()=>[t("div",null,[o[6]||(o[6]=t("span",{class:"card-title"},"今日数据",-1)),t("span",j," 更新时间："+l(s(e).today.time),1)])]),default:r(()=>[t("div",q,[t("div",J,[o[7]||(o[7]=t("div",{class:"leading-10"},"销售额",-1)),t("div",K,l(s(e).today.today_sales),1),t("div",P," 总："+l(s(e).today.total_sales),1)]),t("div",Q,[o[8]||(o[8]=t("div",{class:"leading-10"},"成交订单",-1)),t("div",X,l(s(e).today.order_num),1),t("div",Y," 总："+l(s(e).today.order_sum),1)]),t("div",$,[o[9]||(o[9]=t("div",{class:"leading-10"},"新增用户",-1)),t("div",tt,l(s(e).today.today_new_user),1),t("div",ot," 总："+l(s(e).today.total_new_user),1)]),t("div",et,[o[10]||(o[10]=t("div",{class:"leading-10"},"新增访问量",-1)),t("div",st,l(s(e).today.today_visitor),1),t("div",it," 总："+l(s(e).today.total_visitor),1)])])]),_:1})]),t("div",at,[n(d,{class:"flex-1 !border-none",shadow:"never"},{header:r(()=>o[11]||(o[11]=[t("span",null,"常用功能",-1)])),default:r(()=>[t("div",rt,[(f(!0),x(T,null,W(s(e).menu,p=>(f(),x("div",{class:"md:w-[12.5%] w-1/4 flex flex-col items-center",key:p},[n(k,{to:p.url,class:"mb-3 flex flex-col items-center"},{default:r(()=>[n(S,{width:"40px",height:"40px",src:p==null?void 0:p.image},null,8,["src"]),t("div",lt,l(p.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})]),t("div",nt,[n(d,{class:"!border-none mb-4 lg:mb-0 w-full lg:w-2/3",shadow:"never"},{header:r(()=>o[12]||(o[12]=[t("span",null,"访问量趋势图",-1)])),default:r(()=>[t("div",null,[n(s(_),{ref_key:"visitorChart",ref:u,style:{height:"350px"},option:s(e).visitorOption,autoresize:!0},null,8,["option"])])]),_:1}),n(d,{class:"!border-none w-full lg:w-1/3",shadow:"never"},{header:r(()=>o[13]||(o[13]=[t("span",null,"销售额趋势图",-1)])),default:r(()=>[t("div",null,[n(s(_),{ref_key:"saleChart",ref:m,style:{height:"350px"},option:s(e).saleOption,autoresize:!0},null,8,["option"])])]),_:1})])])}}});export{Ut as default};
