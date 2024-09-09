import{X as ll,Y as tl,T as Ie,O as Te,P as Be,B as je,h as Me,V as nl,v as sl,E as Ne,Z as ol,n as al,o as il,p as rl,_ as dl,s as ul,r as cl,F as pl,$ as fl,H as ml,J as vl,K as yl}from"./element-plus-DYHMmEbd.js";import{_ as gl}from"./index.vue_vue_type_script_setup_true_lang-yCvIOxvX.js";import{_ as hl}from"./index-wtR0y8Wg.js";import{a as _l,l as ve,R as Le,f as q,d as he,b as We,r as B,m as Cl}from"./index-CR4R7Ze_.js";import{P as kl}from"./index-C9g2zszt.js";import{d as K,s as H,r as x,b as se,o as a,c as f,V as s,M as o,I as _e,L as S,a as i,U as I,aa as N,T as te,R as k,w as X,a3 as Y,u as l,i as T,S as h,a0 as Ge,Z as Ye,J as bl,O as ne,W as ge,n as Ue,_ as wl,F as Sl,f as Vl,ab as xl,P as De}from"./@vue-pHjCrgw6.js";import{c as Al}from"./@vueuse-YJSHNXWG.js";import{u as El}from"./usePaging-DPOcKk5Q.js";import{g as $l}from"./vue3-video-play-DOrZ4nvR.js";const zl=K({components:{},props:{type:{type:String,default:"image"},multiple:{type:Boolean,default:!0},limit:{type:Number,default:10},data:{type:Object,default:()=>({})},showProgress:{type:Boolean,default:!1}},emits:["change","error","success","allSuccess"],setup(e,{emit:v}){const C=_l(),y=H(),m=x(`${ve.baseUrl}${ve.urlPrefix}/upload/${e.type}`),b=se(()=>({token:C.token,version:ve.version})),c=x(!1),d=x([]),A=()=>{c.value=!0};let u=0;const p=(R,L)=>{u++,u==d.value.length&&(u=0,d.value=[],v("allSuccess")),v("change",L),R.code==Le.SUCCESS&&v("success",R),R.code==Le.FAIL&&R.msg&&q.msgError(R.msg)},r=(R,L)=>{var V;u++,u==d.value.length&&(u=0,d.value=[],v("allSuccess")),q.msgError(`${L.name}文件上传失败`),(V=y.value)==null||V.abort(L),c.value=!1,v("change",L),v("error",L)},w=()=>{q.msgError(`超出上传上限${e.limit}，请重新上传`)},D=()=>{d.value=[],c.value=!1},F=se(()=>{switch(e.type){case"image":return".jpg,.png,.gif,.jpeg,.ico";case"video":return".wmv,.avi,.mpg,.mpeg,.3gp,.mov,.mp4,.flv,.rmvb,.mkv";default:return"*"}});return{uploadRefs:y,action:m,headers:b,visible:c,fileList:d,getAccept:F,handleProgress:A,handleSuccess:p,handleError:r,handleExceed:w,handleClose:D}}}),Rl={class:"upload"},Pl={class:"file-list p-4"},Ll={class:"flex-1"};function Ul(e,v,C,y,m,b){const c=ll,d=tl,A=Ie;return a(),f("div",Rl,[s(c,{"file-list":e.fileList,"onUpdate:fileList":v[0]||(v[0]=u=>e.fileList=u),ref:"uploadRefs",action:e.action,multiple:e.multiple,limit:e.limit,"show-file-list":!1,headers:e.headers,data:e.data,"on-progress":e.handleProgress,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"on-error":e.handleError,accept:e.getAccept},{default:o(()=>[_e(e.$slots,"default")]),_:3},8,["file-list","action","multiple","limit","headers","data","on-progress","on-success","on-exceed","on-error","accept"]),e.showProgress&&e.fileList.length?(a(),S(A,{key:0,modelValue:e.visible,"onUpdate:modelValue":v[1]||(v[1]=u=>e.visible=u),title:"上传进度","close-on-click-modal":!1,width:"500px",modal:!1,onClose:e.handleClose},{default:o(()=>[i("div",Pl,[(a(!0),f(I,null,N(e.fileList,(u,p)=>(a(),f("div",{key:p,class:"mb-5"},[i("div",null,te(u.name),1),i("div",Ll,[s(d,{percentage:parseInt(u.percentage)},null,8,["percentage"])])]))),128))])]),_:1},8,["modelValue","onClose"])):k("",!0)])}const Dl=he(zl,[["render",Ul]]),Fl={class:"popover-input__input mr-[10px] flex-1"},Il={class:"popover-input__btns flex-none"},Tl=K({__name:"index",props:{value:{type:String},type:{type:String,default:"text"},width:{type:[Number,String],default:"300px"},placeholder:String,disabled:{type:Boolean,default:!1},options:{type:Array,default:()=>[]},size:{type:String,default:"default"},limit:{type:Number,default:200},showLimit:{type:Boolean,default:!1},teleported:{type:Boolean,default:!0}},emits:["confirm"],setup(e,{emit:v}){const C=e,y=v,m=x(!1),b=x(!1),c=x(),d=()=>{u(),y("confirm",c.value)},A=()=>{C.disabled||(m.value=!0)},u=()=>{m.value=!1};return X(()=>C.value,p=>{c.value=p},{immediate:!0}),Al(document.documentElement,"click",()=>{b.value||u()}),(p,r)=>{const w=Te,D=Be,F=je,R=Me,L=nl;return a(),f("div",{onMouseenter:r[4]||(r[4]=V=>b.value=!0),onMouseleave:r[5]||(r[5]=V=>b.value=!1)},[s(L,{placement:"top",visible:l(m),"onUpdate:visible":r[3]||(r[3]=V=>T(m)?m.value=V:null),width:e.width,trigger:"contextmenu",class:"popover-input",teleported:e.teleported,persistent:!1,"popper-class":"!p-0"},{reference:o(()=>[i("div",{class:"inline",onClick:Y(A,["stop"])},[_e(p.$slots,"default")])]),default:o(()=>[i("div",{class:"flex p-3",onClick:r[2]||(r[2]=Y(()=>{},["stop"]))},[i("div",Fl,[e.type=="select"?(a(),S(D,{key:0,class:"flex-1",size:e.size,modelValue:l(c),"onUpdate:modelValue":r[0]||(r[0]=V=>T(c)?c.value=V:null),teleported:e.teleported},{default:o(()=>[(a(!0),f(I,null,N(e.options,V=>(a(),S(w,{key:V.value,label:V.label,value:V.value},null,8,["label","value"]))),128))]),_:1},8,["size","modelValue","teleported"])):(a(),S(F,{key:1,modelValue:l(c),"onUpdate:modelValue":r[1]||(r[1]=V=>T(c)?c.value=V:null),modelModifiers:{trim:!0},maxlength:e.limit,"show-word-limit":e.showLimit,type:e.type,size:e.size,clearable:"",placeholder:e.placeholder},null,8,["modelValue","maxlength","show-word-limit","type","size","placeholder"]))]),i("div",Il,[s(R,{link:"",onClick:u},{default:o(()=>r[6]||(r[6]=[h("取消")])),_:1}),s(R,{type:"primary",size:e.size,onClick:d},{default:o(()=>r[7]||(r[7]=[h("确定")])),_:1},8,["size"])])])]),_:3},8,["visible","width","teleported"])],32)}}}),Bl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAACJElEQVRYR+2YMWsUURSFz3m7s+nskjUIQSutbMRi7WzUVjSadMHCbVLkByjmLygaCVYWRqMEUhkFS9Gg0cJfYCPZjYUQFbPs+I7c2R1Q2ZjZfRNYYS4MAzPv3vnmvDvL3kMA2Hl5/CjLI9ckf4ZwY3Zt15C+gfwIao3So0rt3XsJtPUk9M/cAW6y9ap2DIyfAjgCwANwGeoYiEFtk/5e5CvXeer1D2neATcGgiTZM4+t9RNLEKcBtAFEGeBsiRWzl7EoSXo+8rV9gWc/fDc1B1VSEoEnDpj0KTB33tS26DGaEezvZQZpRxmODyoT5+vwBwS3zeTcT4yjTdZNJEiPSykk1bjZX6HeD/WQJ1zUApgq2w+etcsniBuAVlH9vELOx6Yo1VywgkmTB4X1kEGGhyAtg/Ecq3NNqnknDwVTrNBaactEts88OHs5b8Bw/Tof4M+kr4WrwwhoL9n5uRPWhxWwsxPEl+EGNMacP5I8evCPGgVgqKSFgoWCoQqE5hc9WCgYqkBoftGDeSiYz1/+UJLe+foftvh2A2B1fwQIrapkaFoDcK4PVyH0qVnyU4fjGdW4NQ2WlgDE5hLkMoJmQdh9zW9Dk59K5lhtLjyE01TX/jDILP5MGEbvbFPOJroIXvc5PjvTBbx7GM4vAjjd9WdSc2g/IPaqaTv5Aq58haP1TSb2Au20GGErvgTxIqiTAA7tVSnn+2Z9vAXdCsa4bD6Nsf0C/gYA5PMzcW0AAAAASUVORK5CYII=",jl=K({props:{uri:{type:String},fileSize:{type:String,default:"100px"},width:{type:String,default:""},height:{type:String,default:""},type:{type:String,default:"image"}},emits:["close"]}),Ml=["src"],Nl={key:3,class:"absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full w-5 h-5 flex justify-center items-center bg-[rgba(0,0,0,0.3)]"};function Wl(e,v,C,y,m,b){const c=sl,d=We;return a(),f("div",null,[i("div",{class:"file-item relative",style:Ge({height:e.height||e.fileSize,width:e.width||e.fileSize})},[e.type=="image"?(a(),S(c,{key:0,class:"image",fit:"contain",src:e.uri},null,8,["src"])):e.type=="video"?(a(),f("video",{key:1,class:"video",src:e.uri},null,8,Ml)):(a(),S(c,{key:2,class:"image",src:"https://img95.699pic.com/element/40103/3946.png_860.png"})),e.type=="video"?(a(),f("div",Nl,[s(d,{name:"el-icon-CaretRight",size:18,color:"#fff"})])):k("",!0),_e(e.$slots,"default",{},void 0,!0)],4)])}const ye=he(jl,[["render",Wl],["__scopeId","data-v-acf6f94d"]]);function Fe(e){return B.post({url:"/file/addCate",params:e})}function Gl(e){return B.post({url:"/file/editCate",params:e})}function Yl(e){return B.post({url:"/file/delCate",params:e})}function ql(e){return B.get({url:"/file/listCate",params:e})}function Kl(e){return B.get({url:"/file/lists",params:e},{ignoreCancelToken:!0,isOpenRetry:!1})}function Ol(e){return B.post({url:"/file/delete",params:e})}function Zl(e){return B.post({url:"/file/move",params:e})}function Jl(e){return B.post({url:"/file/rename",params:e})}function Ql(e){const v=H(),C=x([]),y=x(""),m=async()=>{const p=await ql({page_type:0,type:e}),r=[{name:"全部",id:""},{name:"未分组",id:0}];C.value=p.lists,C.value.unshift(...r),setTimeout(()=>{var w;(w=v.value)==null||w.setCurrentKey(y.value)},0)};return{treeRef:v,cateId:y,cateLists:C,handleAddCate:async p=>{await Fe({type:e,name:p,pid:0}),m()},handleAddChildCate:async(p,r)=>{await Fe({type:e,name:p,pid:r}),m()},handleEditCate:async(p,r)=>{await Gl({id:r,name:p}),m()},handleDeleteCate:async(p,r)=>{r?await q.confirm("删除文件夹将会永久删除文件夹及其所有内容。您确定要继续吗？"):await q.confirm("确定要删除？"),await Yl({id:p}),y.value="",m()},getCateLists:m,handleCatSelect:p=>{y.value=p.id}}}function Xl(e,v,C,y){const m=H(),b=x("normal"),c=x(0),d=x([]),A=x(!1),u=x(!1),p=Ye({name:"",type:v,cid:e,source:""}),{pager:r,getLists:w,resetPage:D}=El({fetchFun:Kl,params:p,firstLoading:!0,size:y}),F=()=>{w()},R=()=>{D()},L=_=>!!d.value.find(g=>g.id==_),V=async _=>{await q.confirm("确认删除后，本地或云存储文件也将同步删除，如文件已被使用，请谨慎操作！");const g=_||d.value.map(U=>U.id);await Ol({ids:g}),F(),W()},oe=async()=>{const _=d.value.map(g=>g.id);await Zl({ids:_,cid:c.value}),c.value=0,F(),W()},ae=_=>{const g=d.value.findIndex(U=>U.id==_.id);if(g!=-1){d.value.splice(g,1);return}if(d.value.length==C.value){if(C.value==1){d.value=[],d.value.push(_);return}Ne.warning("已达到选择上限");return}d.value.push(_)},W=()=>{d.value=[]};return{listShowType:b,tableRef:m,moveId:c,pager:r,fileParams:p,select:d,isCheckAll:A,isIndeterminate:u,getFileList:F,refresh:R,batchFileDelete:V,batchFileMove:oe,selectFile:ae,isSelect:L,clearSelect:W,cancelSelete:_=>{d.value=d.value.filter(g=>g.id!=_)},selectAll:_=>{var g;if(u.value=!1,(g=m.value)==null||g.toggleAllSelection(),_){d.value=[...r.lists];return}W()},handleFileRename:async(_,g)=>{await Jl({id:g,name:_}),F()}}}const Hl=K({__name:"index",props:{src:{type:String,required:!0},width:String,height:String,poster:String},setup(e,{expose:v}){const C=e,y=H(),m=Ye({color:"var(--el-color-primary)",muted:!1,webFullScreen:!1,speedRate:["0.75","1.0","1.25","1.5","2.0"],autoPlay:!0,loop:!1,mirror:!1,ligthOff:!1,volume:.3,control:!0,title:"",poster:"",...C}),b=()=>{y.value.play()},c=()=>{y.value.pause()},d=r=>{console.log(r,"播放")},A=r=>{console.log(r,"暂停")},u=r=>{console.log(r,"时间更新")},p=r=>{console.log(r,"可以播放")};return v({play:b,pause:c}),(r,w)=>(a(),f("div",null,[s(l($l),bl({ref_key:"playerRef",ref:y},m,{src:e.src,onPlay:d,onPause:A,onTimeupdate:u,onCanplay:p}),null,16,["src"])]))}}),et={key:0},lt={key:1},tt=K({__name:"preview",props:{modelValue:{type:Boolean,default:!1},url:{type:String,default:""},type:{type:String,default:"image"}},emits:["update:modelValue"],setup(e,{emit:v}){const C=e,y=v,m=H(),b=se({get(){return C.modelValue},set(A){y("update:modelValue",A)}}),c=()=>{y("update:modelValue",!1)},d=x([]);return X(()=>C.modelValue,A=>{A?Ue(()=>{var u;d.value=[C.url],(u=m.value)==null||u.play()}):Ue(()=>{var u;d.value=[],(u=m.value)==null||u.pause()})}),(A,u)=>{const p=ol,r=Hl,w=Ie;return ne((a(),f("div",null,[e.type=="image"?(a(),f("div",et,[l(d).length?(a(),S(p,{key:0,"url-list":l(d),"hide-on-click-modal":"",onClose:c},null,8,["url-list"])):k("",!0)])):k("",!0),e.type=="video"?(a(),f("div",lt,[s(w,{modelValue:l(b),"onUpdate:modelValue":u[0]||(u[0]=D=>T(b)?b.value=D:null),width:"740px",title:"视频预览","before-close":c},{default:o(()=>[s(r,{ref_key:"playerRef",ref:m,src:e.url,width:"100%",height:"450px"},null,8,["src"])]),_:1},8,["modelValue"])])):k("",!0)],512)),[[ge,e.modelValue]])}}}),nt={class:"material"},st={class:"material__left"},ot={class:"flex-1 min-h-0"},at={class:"material-left__content pt-4 p-b-4"},it={class:"flex flex-1 items-center min-w-0 pr-4"},rt={class:"flex-1 truncate mr-2"},dt=["onClick"],ut={class:"flex justify-center p-2 border-t border-br"},ct={class:"material__center flex flex-col"},pt={class:"operate-btn flex"},ft={class:"flex-1 flex"},mt={class:"flex items-center ml-2"},vt={key:0,class:"mt-3"},yt={class:"material-center__content flex flex-col flex-1 mb-1 min-h-0"},gt={class:"file-list flex flex-wrap mt-4"},ht={key:0,class:"item-selected"},_t={class:"operation-btns flex items-center"},Ct={class:"inline-block"},kt={class:"inline-block"},bt={class:"inline-block"},wt={key:1,class:"flex flex-1 justify-center items-center"},St={class:"material-center__footer flex justify-between items-center mt-2"},Vt={class:"flex"},xt={class:"mr-3"},At={key:0,class:"material__right"},Et={class:"flex justify-between p-2 flex-wrap"},$t={class:"sm flex items-center"},zt={key:0},Rt={class:"flex-1 min-h-0"},Pt={class:"select-lists flex flex-col p-t-3"},Lt={class:"select-item"},Ut=K({__name:"index",props:{fileSize:{type:String,default:"100px"},limit:{type:Number,default:1},type:{type:String,default:"image"},mode:{type:String,default:"picker"},pageSize:{type:Number,default:15}},emits:["change"],setup(e,{expose:v,emit:C}){const y=e,m=C,{limit:b}=wl(y),c=se(()=>{switch(y.type){case"image":return 10;case"video":return 20;case"file":return 30;default:return 0}}),d=[{value:"0",label:"后台上传"},{value:"1",label:"前端上传"}],A=Sl("visible",x(!1)),u=x(""),p=x(!1),{treeRef:r,cateId:w,cateLists:D,handleAddCate:F,handleAddChildCate:R,handleEditCate:L,handleDeleteCate:V,getCateLists:oe,handleCatSelect:ae}=Ql(c.value),{tableRef:W,listShowType:j,moveId:M,pager:P,fileParams:_,select:g,isCheckAll:U,isIndeterminate:O,getFileList:Ce,refresh:G,batchFileDelete:ee,batchFileMove:ke,selectFile:ie,isSelect:be,clearSelect:we,cancelSelete:qe,selectAll:Se,handleFileRename:Ve}=Xl(w,c,b,y.pageSize),xe=async()=>{var z;await oe(),(z=r.value)==null||z.setCurrentKey(w.value),Ce()},re=z=>{u.value=z,p.value=!0};X(()=>A.value,async z=>{z&&xe()},{immediate:!0}),X(w,()=>{_.name="",G()}),X(g,z=>{if(m("change",z),z.length==P.lists.length&&z.length!==0){O.value=!1,U.value=!0;return}z.length>0?O.value=!0:(U.value=!1,O.value=!1)},{deep:!0}),Vl(()=>{y.mode=="page"&&xe()}),v({clearSelect:we});const Ae=x(),Ke=z=>{const t=z,Z=Ae.value;Z.value=t,Z.select(),document.execCommand("copy"),Ne({message:"地址复制成功",type:"success"})};return(z,t)=>{const Z=Cl,de=al,J=Tl,Oe=il,Ze=rl,Je=dl,ue=ul,$=Me,ce=Dl,pe=Te,fe=Be,Ee=kl,le=We,Qe=je,$e=cl,me=pl,ze=hl,Re=fl,Q=ml,Xe=vl,He=gl,el=yl;return ne((a(),f("div",nt,[i("div",st,[i("div",ot,[s(ue,null,{default:o(()=>[i("div",at,[s(Je,{ref_key:"treeRef",ref:r,"node-key":"id",data:l(D),"empty-text":"","highlight-current":!0,"expand-on-click-node":!1,"current-node-key":l(w),onNodeClick:l(ae)},{default:o(({data:n})=>[i("div",it,[t[16]||(t[16]=i("img",{class:"w-[20px] h-[16px] mr-3",src:Bl},null,-1)),i("span",rt,[s(Z,{content:n.name},null,8,["content"])]),n.id>0?(a(),S(Ze,{key:0,"hide-on-click":!1},{dropdown:o(()=>[s(Oe,null,{default:o(()=>[s(J,{onConfirm:E=>l(L)(E,n.id),size:"default",value:n.name,width:"400px",limit:20,"show-limit":"",teleported:""},{default:o(()=>[i("div",null,[s(de,null,{default:o(()=>t[12]||(t[12]=[h(" 命名分组 ")])),_:1})])]),_:2},1032,["onConfirm","value"]),s(J,{onConfirm:E=>l(R)(E,n.id),size:"default",width:"400px",limit:20,"show-limit":"",teleported:""},{default:o(()=>[i("div",null,[s(de,null,{default:o(()=>t[13]||(t[13]=[h(" 添加分组 ")])),_:1})])]),_:2},1032,["onConfirm"]),i("div",{onClick:E=>{var Pe;return l(V)(n.id,(Pe=n==null?void 0:n.children)==null?void 0:Pe.length)}},[s(de,null,{default:o(()=>t[14]||(t[14]=[h("删除分组")])),_:1})],8,dt)]),_:2},1024)]),default:o(()=>[t[15]||(t[15]=i("span",{class:"muted m-r-10"},"···",-1))]),_:2},1024)):k("",!0)])]),_:1},8,["data","current-node-key","onNodeClick"])])]),_:1})]),i("div",ut,[s(J,{onConfirm:l(F),size:"default",width:"400px",limit:20,"show-limit":"",teleported:""},{default:o(()=>[s($,null,{default:o(()=>t[17]||(t[17]=[h(" 添加分组 ")])),_:1})]),_:1},8,["onConfirm"])])]),i("div",ct,[i("div",pt,[i("div",ft,[e.type=="image"?(a(),S(ce,{key:0,class:"mr-3",data:{cid:l(w)},type:e.type,"show-progress":!0,onChange:l(G)},{default:o(()=>[s($,{type:"primary"},{default:o(()=>t[18]||(t[18]=[h("本地上传")])),_:1})]),_:1},8,["data","type","onChange"])):k("",!0),e.type=="video"?(a(),S(ce,{key:1,class:"mr-3",data:{cid:l(w)},type:e.type,"show-progress":!0,onAllSuccess:l(G)},{default:o(()=>[s($,{type:"primary"},{default:o(()=>t[19]||(t[19]=[h("本地上传")])),_:1})]),_:1},8,["data","type","onAllSuccess"])):k("",!0),e.type=="file"?(a(),S(ce,{key:2,class:"mr-3",data:{cid:l(w)},type:e.type,"show-progress":!0,onAllSuccess:l(G)},{default:o(()=>[s($,{type:"primary"},{default:o(()=>t[20]||(t[20]=[h("本地上传")])),_:1})]),_:1},8,["data","type","onAllSuccess"])):k("",!0),e.mode=="page"?(a(),S($,{key:3,disabled:!l(g).length,onClick:t[0]||(t[0]=Y(n=>l(ee)(),["stop"]))},{default:o(()=>t[21]||(t[21]=[h(" 删除 ")])),_:1},8,["disabled"])):k("",!0),e.mode=="page"?(a(),S(Ee,{key:4,class:"ml-3",onConfirm:l(ke),disabled:!l(g).length,title:"移动文件"},{trigger:o(()=>[s($,{disabled:!l(g).length},{default:o(()=>t[22]||(t[22]=[h("移动")])),_:1},8,["disabled"])]),default:o(()=>[i("div",null,[t[23]||(t[23]=i("span",{class:"mr-5"},"移动文件至",-1)),s(fe,{modelValue:l(M),"onUpdate:modelValue":t[1]||(t[1]=n=>T(M)?M.value=n:null),placeholder:"请选择"},{default:o(()=>[(a(!0),f(I,null,N(l(D),n=>(a(),f(I,{key:n.id},[n.id!==""?(a(),S(pe,{key:0,label:n.name,value:n.id},null,8,["label","value"])):k("",!0)],64))),128))]),_:1},8,["modelValue"])])]),_:1},8,["onConfirm","disabled"])):k("",!0)]),s(fe,{modelValue:l(_).source,"onUpdate:modelValue":t[2]||(t[2]=n=>l(_).source=n),placeholder:"请选择文件来源",clearable:"",style:{"margin-right":"20px"},class:"w-50"},{default:o(()=>[(a(),f(I,null,N(d,n=>s(pe,{key:n.value,label:n.label,value:n.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),s(Qe,{class:"w-60",placeholder:"请输入名称",modelValue:l(_).name,"onUpdate:modelValue":t[3]||(t[3]=n=>l(_).name=n),onKeyup:xl(l(G),["enter"])},{append:o(()=>[s($,{onClick:l(G)},{icon:o(()=>[s(le,{name:"el-icon-Search"})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeyup"]),i("div",mt,[s($e,{content:"列表视图",placement:"top"},{default:o(()=>[i("div",{class:De(["list-icon",{select:l(j)=="table"}]),onClick:t[4]||(t[4]=n=>j.value="table")},[s(le,{name:"local-icon-list-2",size:18})],2)]),_:1}),s($e,{content:"平铺视图",placement:"top"},{default:o(()=>[i("div",{class:De(["list-icon",{select:l(j)=="normal"}]),onClick:t[5]||(t[5]=n=>j.value="normal")},[s(le,{name:"el-icon-Menu",size:18})],2)]),_:1})])]),e.mode=="page"?(a(),f("div",vt,[s(me,{disabled:!l(P).lists.length,modelValue:l(U),"onUpdate:modelValue":t[6]||(t[6]=n=>T(U)?U.value=n:null),onChange:l(Se),indeterminate:l(O)},{default:o(()=>t[24]||(t[24]=[h(" 当页全选 ")])),_:1},8,["disabled","modelValue","onChange","indeterminate"])])):k("",!0),i("div",yt,[l(P).lists.length?ne((a(),S(ue,{key:0},{default:o(()=>[i("ul",gt,[(a(!0),f(I,null,N(l(P).lists,n=>(a(),f("li",{class:"file-item-wrap",key:n.id,style:Ge({width:e.fileSize})},[s(ze,{onClose:E=>l(ee)([n.id])},{default:o(()=>[s(ye,{uri:n.url,"file-size":e.fileSize,type:e.type,onClick:E=>l(ie)(n)},{default:o(()=>[l(be)(n.id)?(a(),f("div",ht,[s(le,{size:24,name:"el-icon-Check",color:"#fff"})])):k("",!0)]),_:2},1032,["uri","file-size","type","onClick"])]),_:2},1032,["onClose"]),s(Z,{class:"mt-1",content:n.name},null,8,["content"]),i("div",_t,[s(J,{onConfirm:E=>l(Ve)(E,n.id),size:"default",value:n.name,width:"400px",limit:50,"show-limit":"",teleported:""},{default:o(()=>[s($,{type:"primary",link:""},{default:o(()=>t[25]||(t[25]=[h(" 重命名 ")])),_:1})]),_:2},1032,["onConfirm","value"]),n.type===10||n.type===20?(a(),S($,{key:0,type:"primary",link:"",onClick:E=>re(n.url)},{default:o(()=>t[26]||(t[26]=[h(" 查看 ")])),_:2},1032,["onClick"])):k("",!0),n.type===10||n.type===20?(a(),S($,{key:1,type:"primary",link:"",onClick:E=>Ke(n.url),style:{"margin-left":"1px"}},{default:o(()=>t[27]||(t[27]=[h("地址")])),_:2},1032,["onClick"])):(a(),S(Re,{key:2,type:"primary",underline:!1,style:{"margin-left":"25px"},href:n.url},{default:o(()=>t[28]||(t[28]=[h("下载")])),_:2},1032,["href"]))])],4))),128))])]),_:1},512)),[[ge,l(j)=="normal"]]):k("",!0),ne(s(Xe,{ref_key:"tableRef",ref:W,class:"mt-4",data:l(P).lists,width:"100%",height:"100%",size:"large",onRowClick:l(ie)},{default:o(()=>[s(Q,{width:"55"},{default:o(({row:n})=>[s(me,{modelValue:l(be)(n.id),onChange:E=>l(ie)(n)},null,8,["modelValue","onChange"])]),_:1}),s(Q,{label:"图片",width:"100"},{default:o(({row:n})=>[s(ye,{uri:n.url,"file-size":"50px",type:e.type},null,8,["uri","type"])]),_:1}),s(Q,{label:"名称","min-width":"100","show-overflow-tooltip":""},{default:o(({row:n})=>[s(Re,{onClick:Y(E=>re(n.url),["stop"]),underline:!1},{default:o(()=>[h(te(n.name),1)]),_:2},1032,["onClick"])]),_:1}),s(Q,{prop:"create_time",label:"上传时间","min-width":"100"}),s(Q,{label:"操作",width:"150",fixed:"right"},{default:o(({row:n})=>[i("div",Ct,[s(J,{onConfirm:E=>l(Ve)(E,n.id),size:"default",value:n.name,width:"400px",limit:50,"show-limit":"",teleported:""},{default:o(()=>[s($,{type:"primary",link:""},{default:o(()=>t[29]||(t[29]=[h(" 重命名 ")])),_:1})]),_:2},1032,["onConfirm","value"])]),i("div",kt,[s($,{type:"primary",link:"",onClick:Y(E=>re(n.url),["stop"])},{default:o(()=>t[30]||(t[30]=[h(" 查看 ")])),_:2},1032,["onClick"])]),i("div",bt,[s($,{type:"primary",link:"",onClick:Y(E=>l(ee)([n.id]),["stop"])},{default:o(()=>t[31]||(t[31]=[h(" 删除 ")])),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data","onRowClick"]),[[ge,l(j)=="table"]]),!l(P).loading&&!l(P).lists.length?(a(),f("div",wt," 暂无数据~ ")):k("",!0)]),i("div",St,[i("div",Vt,[e.mode=="page"?(a(),f(I,{key:0},[i("span",xt,[s(me,{disabled:!l(P).lists.length,modelValue:l(U),"onUpdate:modelValue":t[7]||(t[7]=n=>T(U)?U.value=n:null),onChange:l(Se),indeterminate:l(O)},{default:o(()=>t[32]||(t[32]=[h(" 当页全选 ")])),_:1},8,["disabled","modelValue","onChange","indeterminate"])]),s($,{disabled:!l(g).length,onClick:t[8]||(t[8]=n=>l(ee)())},{default:o(()=>t[33]||(t[33]=[h(" 删除 ")])),_:1},8,["disabled"]),s(Ee,{class:"ml-3 inline",onConfirm:l(ke),disabled:!l(g).length,title:"移动文件"},{trigger:o(()=>[s($,{disabled:!l(g).length},{default:o(()=>t[34]||(t[34]=[h("移动")])),_:1},8,["disabled"])]),default:o(()=>[i("div",null,[t[35]||(t[35]=i("span",{class:"mr-5"},"移动文件至",-1)),s(fe,{modelValue:l(M),"onUpdate:modelValue":t[9]||(t[9]=n=>T(M)?M.value=n:null),placeholder:"请选择"},{default:o(()=>[(a(!0),f(I,null,N(l(D),n=>(a(),f(I,{key:n.id},[n.id!==""?(a(),S(pe,{key:0,label:n.name,value:n.id},null,8,["label","value"])):k("",!0)],64))),128))]),_:1},8,["modelValue"])])]),_:1},8,["onConfirm","disabled"])],64)):k("",!0)]),s(He,{modelValue:l(P),"onUpdate:modelValue":t[10]||(t[10]=n=>T(P)?P.value=n:null),onChange:l(Ce),layout:"total, prev, pager, next, jumper"},null,8,["modelValue","onChange"])])]),e.mode=="picker"?(a(),f("div",At,[i("div",Et,[i("div",$t,[h(" 已选择 "+te(l(g).length)+" ",1),l(b)?(a(),f("span",zt,"/"+te(l(b)),1)):k("",!0)]),s($,{type:"primary",link:"",onClick:l(we)},{default:o(()=>t[36]||(t[36]=[h("清空")])),_:1},8,["onClick"])]),i("div",Rt,[s(ue,{class:"ls-scrollbar"},{default:o(()=>[i("ul",Pt,[(a(!0),f(I,null,N(l(g),n=>(a(),f("li",{class:"mb-4",key:n.id},[i("div",Lt,[s(ze,{onClose:E=>l(qe)(n.id)},{default:o(()=>[s(ye,{uri:n.url,"file-size":"100px",type:e.type},null,8,["uri","type"])]),_:2},1032,["onClose"])])]))),128))])]),_:1})])])):k("",!0),s(tt,{modelValue:l(p),"onUpdate:modelValue":t[11]||(t[11]=n=>T(p)?p.value=n:null),url:l(u),type:e.type},null,8,["modelValue","url","type"]),i("input",{ref_key:"textCopys",ref:Ae,id:"textCopys",value:"",style:{opacity:"0",position:"absolute"}},null,512)])),[[el,l(P).loading]])}}}),Gt=he(Ut,[["__scopeId","data-v-df4f59e2"]]);export{ye as F,Gt as _,tt as a};
