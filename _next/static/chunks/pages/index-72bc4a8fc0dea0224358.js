(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4273:function(e,t,n){"use strict";n.r(t);var i=n(6952),a=n(4565),s=n(1717),r=n(8742),c=n.n(r),l=n(1320),o=n.n(l),u=n(6380),d=n.n(u),m=n(4127),h=n.n(m),f=n(7378),g=n(8038),x=n(6677),p=n(373),Z=n(8559),v=n(6877),j=n(1672),k=n(8762),T=n(7476),b=n(3456),S=n(4139),w=n(4344),N=n(9334),I=n(8442),E=n(4509),C=n(1995),L=n(4954),y=n(6107),A=n(7712),D=n(8340),R=n(220),M=n(6235),_=n(4246),F=(0,p.Z)((function(e){return(0,Z.Z)({root:{flexGrow:1,textAlign:"left",paddingTop:e.spacing(4)},table:(0,s.Z)({width:"max-content",minWidth:"600px"},e.breakpoints.down("xs"),{minWidth:"200px"}),textField:(0,s.Z)({marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%",verticalAlign:"top"},e.breakpoints.down("xs"),{width:"90%",marginLeft:e.spacing(1),marginRight:0,paddingLeft:0}),selectField:(0,s.Z)({marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%",verticalAlign:"bottom"},e.breakpoints.down("xs"),{width:"90%",marginLeft:e.spacing(1),marginRight:0,paddingLeft:0}),button:{marginLeft:e.spacing(1),marginRight:e.spacing(1),height:"100%"},menuButton:(0,s.Z)({marginLeft:e.spacing(1),marginRight:e.spacing(1)},e.breakpoints.down("xs"),{width:"100%",marginLeft:0,marginRight:0,marginTop:e.spacing(1),borderRadius:"0px"}),scheduleInfo:{marginLeft:e.spacing(2)},remaining:{marginLeft:e.spacing(1),fontSize:"90%",color:"#6fa5b3"}})}));function B(e){var t=e.split(":");return{hour:parseInt(t[0]),min:parseInt(t[1]),sec:t.length>2?parseInt(t[2]):0}}function P(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=B(e);a.min+=Math.floor(Math.random()*t);var s=new Date,r=new Date;return r.setHours(a.hour),r.setMinutes(a.min),r.setSeconds(0),(i||n>r||s>=r)&&r.setDate(r.getDate()+1),r}var H=function(e){if(!e)return"N/A, needs to click UPDATE button.";var t=o()(e);return"Invalid date"==t?"N/A, needs to click UPDATE button.":t.format("YYYY/MM/DD HH:mm:ss")},G=d(),Y=new(h())(G);t.default=function(e){var t=F(e),n=(0,x.useRouter)(),s=f.useState(""),r=(0,a.Z)(s,2),l=r[0],u=r[1],d=f.useState(G.get("randomRange")||20),m=(0,a.Z)(d,2),h=m[0],p=m[1],Z=f.useState(G.get("shiftStartTime")||"10:00"),B=(0,a.Z)(Z,2),z=B[0],O=B[1],U=f.useState(G.get("shiftEndTime")||"19:00"),V=(0,a.Z)(U,2),W=V[0],X=V[1],q=f.useState(G.get("nextShiftStartTime")),J=(0,a.Z)(q,2),K=J[0],Q=J[1],$=f.useState(G.get("nextShiftEndTime")),ee=(0,a.Z)($,2),te=ee[0],ne=ee[1],ie=f.useState(H(K)),ae=(0,a.Z)(ie,2),se=ae[0],re=ae[1],ce=f.useState(H(te)),le=(0,a.Z)(ce,2),oe=le[0],ue=le[1],de=f.useState(""),me=(0,a.Z)(de,2),he=me[0],fe=me[1],ge=f.useState(""),xe=(0,a.Z)(ge,2),pe=xe[0],Ze=xe[1],ve=f.useState(G.get("lastClockInTime")),je=(0,a.Z)(ve,2),ke=je[0],Te=je[1],be=f.useState([]),Se=(0,a.Z)(be,2),we=Se[0],Ne=Se[1],Ie=(0,R.Z)(),Ee=(0,M.Z)(Ie.breakpoints.up("sm")),Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new Date(G.get("lastClockInTime")),n=P(z,h,t,e);Q(n),G.set("nextShiftStartTime",n),re(H(n))},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new Date(G.get("lastClockInTime")),n=P(W,h,t,e);ne(n),G.set("nextShiftEndTime",n),ue(H(n))},ye=function(){setTimeout((function(){u("")}),5e3)},Ae=function(){var e=(0,i.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u("Sending clock in request to GreatDay"),e.next=4,Y.clockIn();case 4:return u("Clock in success"),ye(),t=(new Date).toString(),Te(t),G.set("lastClockInTime",t),e.next=11,De(!0);case 11:return e.abrupt("return",!0);case 14:return e.prev=14,e.t0=e.catch(0),console.error("clockIn failed, error:",e.t0.message),u("Clock In failed"),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),De=function(){var e=(0,i.Z)(c().mark((function e(){var t,n=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]&&n[0],e.prev=1,e.next=4,Y.getAttendanceList();case 4:t=e.sent,Ne(t.map((function(e){return{key:"".concat(e.shiftstarttime,"-").concat(e.shiftendtime),name:e.fullName,date:new Date(e.shiftstarttime).toDateString(),startTime:e.starttime?o().utc(e.starttime).format("HH:mm"):"N/A",endTime:e.endtime?o().utc(e.endtime).format("HH:mm"):"N/A"}}))),e.next=15;break;case 8:return e.prev=8,e.t0=e.catch(1),console.error("getAttendanceList failed, error:",e.t0.message),Ne([{key:"getAttendanceListFailed",name:"N/A",date:"Failed",startTime:"Failed",endTime:"Failed"}]),u("Fail to Get attendance list."),ye(),e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),Re=function(e){switch(e){case"shift-start":Ce(!0);break;case"shift-end":Le(!0)}Te(G.get("lastClockInTime"))};return(0,f.useEffect)((function(){G.get("auth-token")||n.push("/login"),e.scheduler.setCallback(Re)})),(0,f.useEffect)((function(){G.get("auth-token")&&De()}),[ke]),(0,f.useEffect)((function(){if(G.get("auth-token")){var e=function(e){return{day:e>86400?parseInt(e/86400):0,hour:e>3600?parseInt(e%86400/3600):0,min:e>60?parseInt(e%3600/60):0,sec:parseInt(e%60)}},t=setInterval((function(){var t=o().utc(),n=o().utc(K).diff(t,"seconds"),i=o().utc(te).diff(t,"seconds"),a=e(n),s=e(i);fe(n>0?"(Remaining ".concat(a.day," days ").concat(a.hour," hrs ").concat(a.min," mins ").concat(a.sec," secs)"):""),Ze(i>0?"(Remaining ".concat(s.day," days ").concat(s.hour," hrs ").concat(s.min," mins ").concat(s.sec," secs)"):"")}),1e3);return function(){t&&(clearInterval(t),t=null)}}}),[K,te]),(0,_.jsxs)(f.Fragment,{children:[(0,_.jsx)(g.default,{children:(0,_.jsx)("title",{children:"GreatDay Genie"})}),(0,_.jsx)("div",{className:t.root,style:{overflow:"hidden"},children:(0,_.jsxs)(v.Z,{container:!0,spacing:2,children:[(0,_.jsx)(v.Z,{item:!0,xs:12,sm:3,children:(0,_.jsx)(j.Z,{id:"shiftStartTime",label:"Shift Start Time",type:"time",className:t.textField,defaultValue:z,size:"medium",inputProps:{step:60},onChange:function(e){O(e.target.value),G.set("shiftStartTime",e.target.value)}})}),(0,_.jsx)(v.Z,{item:!0,xs:12,sm:3,children:(0,_.jsx)(j.Z,{id:"shiftEndTime",label:"Shift End Time",type:"time",className:t.textField,defaultValue:W,size:"medium",inputProps:{step:60},onChange:function(e){X(e.target.value),G.set("shiftEndTime",e.target.value)}})}),(0,_.jsx)(v.Z,{item:!0,xs:12,sm:3,children:(0,_.jsxs)(S.Z,{className:t.selectField,children:[(0,_.jsx)(k.Z,{id:"random-range-label",children:"Random Range"}),(0,_.jsxs)(T.Z,{value:h,onChange:function(e){p(e.target.value),G.set("randomRange",e.target.value)},children:[(0,_.jsx)(b.Z,{value:0,children:"0 Minutes"}),(0,_.jsx)(b.Z,{value:10,children:"10 Minutes"}),(0,_.jsx)(b.Z,{value:20,children:"20 Minutes"}),(0,_.jsx)(b.Z,{value:30,children:"30 Minutes"}),(0,_.jsx)(b.Z,{value:60,children:"70 Minutes"})]})]})}),(0,_.jsx)(v.Z,{item:!0,xs:12,sm:3,children:(0,_.jsx)(N.Z,{variant:"contained",color:"primary",className:t.button,onClick:function(){Ce(!1),Le(!1)},children:"Update"})}),(0,_.jsxs)(v.Z,{item:!0,xs:12,align:"left",children:[(0,_.jsx)(I.Z,{}),(0,_.jsxs)(w.Z,{variant:"subtitle1",gutterBottom:!0,className:t.scheduleInfo,children:["Next Scheduled Shift Start Time:\xa0",!Ee&&(0,_.jsx)("br",{}),se,!Ee&&(0,_.jsx)("br",{}),(0,_.jsx)("span",{className:t.remaining,children:he})]}),(0,_.jsxs)(w.Z,{variant:"subtitle1",gutterBottom:!0,className:t.scheduleInfo,children:["Next Scheduled  Shift End Time: \xa0\xa0",!Ee&&(0,_.jsx)("br",{}),oe,!Ee&&(0,_.jsx)("br",{}),(0,_.jsx)("span",{className:t.remaining,children:pe})]}),(0,_.jsxs)(w.Z,{variant:"subtitle1",gutterBottom:!0,className:t.scheduleInfo,children:["Last Clock-In Time: ",(0,_.jsx)("b",{children:ke?H(ke):""})]}),(0,_.jsx)(I.Z,{})]}),(0,_.jsxs)(v.Z,{item:!0,xs:12,children:[(0,_.jsx)(N.Z,{variant:"contained",color:"secondary",className:t.menuButton,onClick:(0,i.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y.pushLog("INFO","Execute manual clock in"),e.next=3,Ae();case 3:case"end":return e.stop()}}),e)}))),children:"Manual Clock In"}),(0,_.jsx)(N.Z,{variant:"contained",color:"default",className:t.menuButton,onClick:function(){n.push("/attendance_log")},children:"Attendance Logs"}),(0,_.jsx)(N.Z,{variant:"contained",color:"default",className:t.menuButton,onClick:function(){n.push("/clockin_log")},children:"Process Logs"}),(0,_.jsx)(N.Z,{variant:"contained",color:"default",className:t.menuButton,onClick:function(){n.push("/login")},children:"Back to Login Page"})]}),(0,_.jsx)(v.Z,{item:!0,xs:12,children:(0,_.jsx)(w.Z,{variant:"subtitle1",color:"primary",gutterBottom:!0,children:l})}),(0,_.jsx)(v.Z,{item:!0,xs:12,children:(0,_.jsx)(y.Z,{children:(0,_.jsxs)(E.Z,{className:t.table,"aria-label":"attendance list table",children:[(0,_.jsx)(A.Z,{children:(0,_.jsxs)(D.Z,{children:[(0,_.jsx)(L.Z,{children:"NAME"}),(0,_.jsx)(L.Z,{align:"center",children:"DATE"}),(0,_.jsx)(L.Z,{align:"center",children:"START TIME"}),(0,_.jsx)(L.Z,{align:"center",children:"END TIME"})]})}),(0,_.jsx)(C.Z,{children:we.map((function(e){return(0,_.jsxs)(D.Z,{children:[(0,_.jsx)(L.Z,{component:"th",scope:"row",children:e.name}),(0,_.jsx)(L.Z,{align:"center",children:e.date}),(0,_.jsx)(L.Z,{align:"center",children:e.startTime}),(0,_.jsx)(L.Z,{align:"center",children:e.endTime})]},e.key)}))})]})})})]})})]})}},8740:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4273)}])}},function(e){e.O(0,[259,992,933,672,235,774,888,179],(function(){return t=8740,e(e.s=t);var t}));var t=e.O();_N_E=t}]);