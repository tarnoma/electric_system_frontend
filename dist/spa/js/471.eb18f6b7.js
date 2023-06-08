"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[471],{808:(e,s,t)=>{t.d(s,{l:()=>l});var a=t(1809),r=t(985);const l=(0,a.Q_)("loginuser",{state:()=>({userid:(0,r.y$C)("userid",""),fullname:(0,r.y$C)("fullname",""),username:(0,r.y$C)("username",""),accessToken:(0,r.y$C)("accessToken",""),userType:(0,r.y$C)("userType","")}),getters:{getUserId:e=>e.userid,getFullname:e=>e.fullname,getUsername:e=>e.username,getAcessToken:e=>e.accessToken,getUserType:e=>e.userType},actions:{clearStorage(){this.userid="",this.fullname="",this.username="",this.accessToken="",this.userType=""}}})},4471:(e,s,t)=>{t.r(s),t.d(s,{default:()=>q});var a=t(9835),r=t(1957);const l=(0,a._)("div",{style:{"text-align":"center"}},[(0,a._)("h1",null,"Technician login")],-1),n={class:"flex justify-center"},u={class:"flex flex-center"},o=(0,a.Uk)(" Not registered? "),i=(0,a._)("a",{href:"/register"},"Create an Account",-1);function c(e,s,t,c,d,m){const p=(0,a.up)("q-icon"),h=(0,a.up)("q-input"),g=(0,a.up)("q-btn"),y=(0,a.up)("text-caption"),w=(0,a.up)("q-form"),f=(0,a.up)("q-card-section"),_=(0,a.up)("q-card"),b=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(b,null,{default:(0,a.w5)((()=>[l,(0,a._)("div",n,[(0,a.Wm)(_,{class:"my-card bg-grey-1 q-px-xl q-py-xl",style:{width:"40rem"}},{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a.Wm)(p,{name:"account_circle",color:"grey-6",size:"4rem"})]),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{onSubmit:(0,r.iM)(m.onSubmit,["prevent"]),onReset:m.onReset,class:"q-gutter-md",ref:"myLoginForm"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)(h,{modelValue:d.username,"onUpdate:modelValue":s[0]||(s[0]=e=>d.username=e),type:"text",label:"Your Username","lazy-rules":"",rules:[e=>e&&e.length>0||"Must be at least 1 character!"]},null,8,["modelValue","rules"])]),(0,a._)("div",null,[(0,a.Wm)(h,{modelValue:d.password,"onUpdate:modelValue":s[2]||(s[2]=e=>d.password=e),type:d.isPwd?"password":"text",label:"Your Password","lazy-rules":"",rules:[e=>e&&e.length>=6||"Must be at least 6 characters"]},{append:(0,a.w5)((()=>[(0,a.Wm)(p,{name:d.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[1]||(s[1]=e=>d.isPwd=!d.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"])]),(0,a._)("div",null,[(0,a.Wm)(g,{label:"Submit",type:"submit",color:"primary",style:{width:"100%"}})]),(0,a._)("div",null,[(0,a.Wm)(y,{class:"text-cyan-8"},{default:(0,a.w5)((()=>[o,i])),_:1})])])),_:1},8,["onSubmit","onReset"])])),_:1})])),_:1})])])),_:1})}t(9665);var d=t(6827),m=t(808);const p={name:"LoginPage",data(){return{username:null,password:null,isPwd:!0,storeLogUser:(0,m.l)()}},methods:{onReset(){this.username=null,this.password=null,this.isPwd=!0},onSubmit(){const e={username:this.username,password:this.password};this.$api.post("/auth/tech/login",e).then((e=>{200==e.status&&(d.Z.create({type:"positive",message:"Login successfully."}),this.storeLogUser.userid=e.data.id,this.storeLogUser.fullname=e.data.fullname,this.storeLogUser.username=e.data.username,this.storeLogUser.accessToken=e.data.accessToken,this.storeLogUser.userType="technician",this.$router.push("/tech"))})).catch((e=>{console.log(e),d.Z.create({type:"negative",message:"Invalid Username or Password."})})),this.$refs.myLoginForm.reset()}}};var h=t(1639),g=t(9885),y=t(4458),w=t(2857),f=t(3190),_=t(8326),b=t(6611),v=t(9379),T=t(9984),U=t.n(T);const k=(0,h.Z)(p,[["render",c]]),q=k;U()(p,"components",{QPage:g.Z,QCard:y.Z,QIcon:w.Z,QCardSection:f.Z,QForm:_.Z,QInput:b.Z,QBtn:v.Z})}}]);