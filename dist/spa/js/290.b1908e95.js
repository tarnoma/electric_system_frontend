"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[290],{8701:(e,i,a)=>{a.d(i,{S:()=>l});var n=a(1809),d=a(985);const l=(0,n.Q_)("brands",{state:()=>({allBrand:[{id:(0,d.y$C)("brand1id",1),name:(0,d.y$C)("brand1name","Sony"),visibility:(0,d.y$C)("visbrand1",!0)},{id:(0,d.y$C)("brand2id",2),name:(0,d.y$C)("brand2name","Toshiba"),visibility:(0,d.y$C)("visbrand2",!0)},{id:(0,d.y$C)("brand3id",3),name:(0,d.y$C)("brand3name","Panasonic"),visibility:(0,d.y$C)("visbrand3",!0)},{id:(0,d.y$C)("brand4id",4),name:(0,d.y$C)("brand4name","Samsung"),visibility:(0,d.y$C)("visbrand4",!0)},{id:(0,d.y$C)("brand5id",5),name:(0,d.y$C)("brand5name","LG"),visibility:(0,d.y$C)("visbrand5",!0)},{id:(0,d.y$C)("brand6id",6),name:(0,d.y$C)("brand6name","Hitachi"),visibility:(0,d.y$C)("visbrand6",!0)},{id:(0,d.y$C)("brand7id",7),name:(0,d.y$C)("brand7name",""),visibility:(0,d.y$C)("visbrand7",!1)},{id:(0,d.y$C)("brand8id",8),name:(0,d.y$C)("brand8name",""),visibility:(0,d.y$C)("visbrand8",!1)},{id:(0,d.y$C)("brand9id",9),name:(0,d.y$C)("brand9name",""),visibility:(0,d.y$C)("visbrand9",!1)},{id:(0,d.y$C)("brand10id",10),name:(0,d.y$C)("brand10name",""),visibility:(0,d.y$C)("visbrand10",!1)},{id:(0,d.y$C)("brand11id",11),name:(0,d.y$C)("brand11name",""),visibility:(0,d.y$C)("visbrand11",!1)}]}),getters:{},actions:{}})},7503:(e,i,a)=>{a.d(i,{B:()=>l});var n=a(1809),d=a(985);const l=(0,n.Q_)("devices",{state:()=>({allDevice:[{id:1,name:(0,d.y$C)("device1name","Television"),visibility:(0,d.y$C)("visdevice1",!0)},{id:2,name:(0,d.y$C)("device2name","Microwave"),visibility:(0,d.y$C)("visdevice2",!0)},{id:3,name:(0,d.y$C)("device3name","Fan"),visibility:(0,d.y$C)("visdevice3",!0)},{id:4,name:(0,d.y$C)("device4name","Aircondition"),visibility:(0,d.y$C)("visdevice4",!0)},{id:5,name:(0,d.y$C)("device5name","Rice cooker"),visibility:(0,d.y$C)("visdevice5",!0)},{id:6,name:(0,d.y$C)("device6name","Iron"),visibility:(0,d.y$C)("visdevice6",!0)},{id:7,name:(0,d.y$C)("device7name","Refrigerator"),visibility:(0,d.y$C)("visdevice7",!0)},{id:8,name:(0,d.y$C)("device8name","Vacuum cleaner"),visibility:(0,d.y$C)("visdevice8",!0)},{id:9,name:(0,d.y$C)("device9name",""),visibility:(0,d.y$C)("visdevice9",!1)},{id:10,name:(0,d.y$C)("device10name",""),visibility:(0,d.y$C)("visdevice10",!1)},{id:11,name:(0,d.y$C)("device11name",""),visibility:(0,d.y$C)("visdevice11",!1)}]}),getters:{},actions:{}})},9708:(e,i,a)=>{a.d(i,{D:()=>d,S:()=>l});const n=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/,d=e=>n.test(e)||"Please enter a valid email address",l=e=>!!e||"Field is required"},7290:(e,i,a)=>{a.r(i),a.d(i,{default:()=>V});var n=a(9835),d=a(1957);const l=(0,n._)("div",{style:{"text-align":"center"}},[(0,n._)("h1",null,"Welcomeee")],-1),t={class:"flex justify-center"},r={class:"flex flex-center"};function s(e,i,a,s,m,v){const y=(0,n.up)("q-icon"),c=(0,n.up)("q-input"),o=(0,n.up)("q-select"),b=(0,n.up)("q-btn"),u=(0,n.up)("q-form"),C=(0,n.up)("q-card-section"),$=(0,n.up)("q-card"),p=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(p,null,{default:(0,n.w5)((()=>[l,(0,n._)("div",t,[(0,n.Wm)($,{class:"my-card bg-grey-1 q-px-md q-py-md",style:{width:"40rem"}},{default:(0,n.w5)((()=>[(0,n._)("div",r,[(0,n.Wm)(y,{name:"account_circle",color:"grey-6",size:"4rem"})]),(0,n.Wm)(C,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{onSubmit:(0,d.iM)(e.onSubmit,["prevent"]),onReset:e.onReset,class:"q-gutter-md",ref:"myRegisterForm"},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.Wm)(c,{modelValue:e.fullname,"onUpdate:modelValue":i[0]||(i[0]=i=>e.fullname=i),type:"text",label:"Your Fullname","lazy-rules":"",rules:[e=>e&&e.length>0||"Field is required"]},null,8,["modelValue","rules"])]),(0,n._)("div",null,[(0,n.Wm)(c,{modelValue:e.email,"onUpdate:modelValue":i[1]||(i[1]=i=>e.email=i),type:"text",label:"Your Email","lazy-rules":"",rules:[e.emailValidate,e.requiredValidate]},null,8,["modelValue","rules"])]),(0,n.Wm)(o,{modelValue:e.deviceName,"onUpdate:modelValue":i[2]||(i[2]=i=>e.deviceName=i),options:e.getDevices,label:"Device Name"},null,8,["modelValue","options"]),(0,n.Wm)(o,{modelValue:e.deviceBrand,"onUpdate:modelValue":i[3]||(i[3]=i=>e.deviceBrand=i),options:e.getBrands,label:"Device Brand"},null,8,["modelValue","options"]),(0,n._)("div",null,[(0,n.Wm)(b,{label:"Submit",type:"submit",color:"primary"}),(0,n.Wm)(b,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1},8,["onSubmit","onReset"])])),_:1})])),_:1})])])),_:1})}a(9665);var m=a(9708),v=a(7503),y=a(8701);const c=(0,n.aZ)({name:"HomePage",data(){return{fullname:"",email:"",deviceStore:(0,v.B)(),deviceName:"",brandStore:(0,y.S)(),deviceBrand:""}},methods:{emailValidate:m.D,requiredValidate:m.S,onSubmit(){}},computed:{getDevices(){const e=[];return this.deviceStore.allDevice.forEach((i=>{i.visibility&&e.push(i.name)})),e},getBrands(){const e=[];return this.brandStore.allBrand.forEach((i=>{i.visibility&&e.push(i.name)})),e}}});var o=a(1639),b=a(9885),u=a(4458),C=a(2857),$=a(3190),p=a(8326),g=a(6611),f=a(2233),q=a(9379),_=a(9984),h=a.n(_);const S=(0,o.Z)(c,[["render",s]]),V=S;h()(c,"components",{QPage:b.Z,QCard:u.Z,QIcon:C.Z,QCardSection:$.Z,QForm:p.Z,QInput:g.Z,QSelect:f.Z,QBtn:q.Z})}}]);