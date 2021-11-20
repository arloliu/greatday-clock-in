(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4273:function(e,t,n){"use strict";n.r(t);var a=n(6952),i=n(4565),s=n(8742),r=n.n(s),c=n(1320),l=n.n(c),o=n(6380),u=n.n(o),d=n(4127),m=n.n(d),h=n(7378),f=n(8038),g=n(6677),x=n(373),p=n(8559),Z=n(6877),v=n(1672),j=n(8762),k=n(7476),S=n(3456),T=n(4139),b=n(4344),I=n(9334),N=n(8442),w=n(4509),C=n(1995),E=n(4954),y=n(6107),D=n(7712),A=n(8340),L=n(4246),M=(0,x.Z)((function(e){return(0,p.Z)({root:{flexGrow:1,textAlign:"center",paddingTop:e.spacing(4)},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:150,verticalAlign:"top"},selectField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:120,verticalAlign:"bottom"},button:{marginLeft:e.spacing(1),marginRight:e.spacing(1),verticalAlign:"bottom"},scheduleInfo:{marginLeft:e.spacing(2)},remaining:{marginLeft:e.spacing(1),fontSize:"90%",color:"#6fa5b3"}})}));function _(e){var t=e.split(":");return{hour:parseInt(t[0]),min:parseInt(t[1]),sec:t.length>2?parseInt(t[2]):0}}function F(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=_(e);i.min+=Math.floor(Math.random()*t);var s=new Date,r=new Date;return r.setHours(i.hour),r.setMinutes(i.min),r.setSeconds(0),(a||n>r||s>=r)&&r.setDate(r.getDate()+1),r}var R=function(e){if(!e)return"";var t=l()(e);return"Invalid date"==t?"":t.format("YYYY/MM/DD HH:mm:ss")},H=u(),B=new(m())(H);t.default=function(e){var t=M(e),n=(0,g.useRouter)(),s=h.useState(""),c=(0,i.Z)(s,2),o=c[0],u=c[1],d=h.useState(H.get("randomRange")||20),m=(0,i.Z)(d,2),x=m[0],p=m[1],_=h.useState(H.get("shiftStartTime")||"10:00"),G=(0,i.Z)(_,2),P=G[0],Y=G[1],z=h.useState(H.get("shiftEndTime")||"19:00"),O=(0,i.Z)(z,2),V=O[0],X=O[1],q=h.useState(H.get("nextShiftStartTime")),U=(0,i.Z)(q,2),J=U[0],K=U[1],Q=h.useState(H.get("nextShiftEndTime")),W=(0,i.Z)(Q,2),$=W[0],ee=W[1],te=h.useState(R(J)),ne=(0,i.Z)(te,2),ae=ne[0],ie=ne[1],se=h.useState(R($)),re=(0,i.Z)(se,2),ce=re[0],le=re[1],oe=h.useState(""),ue=(0,i.Z)(oe,2),de=ue[0],me=ue[1],he=h.useState(""),fe=(0,i.Z)(he,2),ge=fe[0],xe=fe[1],pe=h.useState(H.get("lastClockInTime")),Ze=(0,i.Z)(pe,2),ve=Ze[0],je=Ze[1],ke=h.useState([]),Se=(0,i.Z)(ke,2),Te=Se[0],be=Se[1],Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new Date(H.get("lastClockInTime")),n=F(P,x,t,e);K(n),H.set("nextShiftStartTime",n),ie(R(n))},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new Date(H.get("lastClockInTime")),n=F(V,x,t,e);ee(n),H.set("nextShiftEndTime",n),le(R(n))},we=function(){setTimeout((function(){u("")}),5e3)},Ce=function(){var e=(0,a.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u("Sending clock in request to GreatDay"),e.next=4,B.clockIn();case 4:return u("Clock in success"),we(),t=(new Date).toString(),je(t),H.set("lastClockInTime",t),e.next=11,Ee(!0);case 11:return e.abrupt("return",!0);case 14:return e.prev=14,e.t0=e.catch(0),console.error("clockIn failed, error:",e.t0.message),u("Clock In failed"),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=(0,a.Z)(r().mark((function e(){var t,n=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]&&n[0],e.prev=1,e.next=4,B.getAttendanceList();case 4:t=e.sent,be(t.map((function(e){return{key:"".concat(e.shiftstarttime,"-").concat(e.shiftendtime),name:e.fullName,date:new Date(e.shiftstarttime).toDateString(),startTime:e.starttime?l().utc(e.starttime).format("HH:mm"):"N/A",endTime:e.endtime?l().utc(e.endtime).format("HH:mm"):"N/A"}}))),e.next=15;break;case 8:return e.prev=8,e.t0=e.catch(1),console.error("getAttendanceList failed, error:",e.t0.message),be([{key:"getAttendanceListFailed",name:"N/A",date:"Failed",startTime:"Failed",endTime:"Failed"}]),u("Fail to Get attendance list."),we(),e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),ye=function(e){switch(e){case"shift-start":Ie(!0);break;case"shift-end":Ne(!0)}je(H.get("lastClockInTime"))};return(0,h.useEffect)((function(){H.get("auth-token")||n.push("/login"),e.scheduler.setCallback(ye)})),(0,h.useEffect)((function(){Ee()}),[ve]),(0,h.useEffect)((function(){var e=function(e){return{day:e>86400?parseInt(e/86400):0,hour:e>3600?parseInt(e%86400/3600):0,min:e>60?parseInt(e%3600/60):0,sec:parseInt(e%60)}},t=setInterval((function(){var t=l().utc(),n=l().utc(J).diff(t,"seconds"),a=l().utc($).diff(t,"seconds"),i=e(n),s=e(a);me(n>0?"(Remaining ".concat(i.day," days ").concat(i.hour," hrs ").concat(i.min," mins ").concat(i.sec," secs)"):""),xe(a>0?"(Remaining ".concat(s.day," days ").concat(s.hour," hrs ").concat(s.min," mins ").concat(s.sec," secs)"):"")}),1e3);return function(){t&&(clearInterval(t),t=null)}}),[J,$]),(0,L.jsxs)(h.Fragment,{children:[(0,L.jsx)(f.default,{children:(0,L.jsx)("title",{children:"GreatDay Genie"})}),(0,L.jsx)("div",{className:t.root,style:{overflow:"hidden"},children:(0,L.jsxs)(Z.Z,{container:!0,spacing:2,children:[(0,L.jsxs)(Z.Z,{item:!0,xs:12,children:[(0,L.jsx)(v.Z,{id:"shiftStartTime",label:"Shift Start Time",type:"time",className:t.textField,defaultValue:P,size:"medium",inputProps:{step:60},onChange:function(e){Y(e.target.value),H.set("shiftStartTime",e.target.value)}}),(0,L.jsx)(v.Z,{id:"shiftEndTime",label:"Shift End Time",type:"time",className:t.textField,defaultValue:V,size:"medium",inputProps:{step:60},onChange:function(e){X(e.target.value),H.set("shiftEndTime",e.target.value)}}),(0,L.jsxs)(T.Z,{children:[(0,L.jsx)(j.Z,{id:"random-range-label",children:"Random Range"}),(0,L.jsxs)(k.Z,{value:x,className:t.selectField,onChange:function(e){p(e.target.value),H.set("randomRange",e.target.value)},children:[(0,L.jsx)(S.Z,{value:0,children:"0 Minutes"}),(0,L.jsx)(S.Z,{value:10,children:"10 Minutes"}),(0,L.jsx)(S.Z,{value:20,children:"20 Minutes"}),(0,L.jsx)(S.Z,{value:30,children:"30 Minutes"}),(0,L.jsx)(S.Z,{value:60,children:"70 Minutes"})]})]}),(0,L.jsx)(I.Z,{variant:"contained",color:"primary",className:t.button,onClick:function(){Ie(!1),Ne(!1)},children:"Update"})]}),(0,L.jsxs)(Z.Z,{item:!0,xs:12,align:"left",children:[(0,L.jsx)(N.Z,{}),(0,L.jsxs)(b.Z,{variant:"subtitle1",gutterBottom:!0,className:t.scheduleInfo,children:["Next Scheduled Shift Start Time: ",ae,(0,L.jsx)("span",{className:t.remaining,children:de})]}),(0,L.jsxs)(b.Z,{variant:"subtitle1",gutterBottom:!0,className:t.scheduleInfo,children:["Next Scheduled  Shift End Time: \xa0 ",ce,(0,L.jsx)("span",{className:t.remaining,children:ge})]}),(0,L.jsxs)(b.Z,{variant:"subtitle1",gutterBottom:!0,className:t.scheduleInfo,children:["Last Clock-In Time: ",(0,L.jsx)("b",{children:ve?R(ve):""})]}),(0,L.jsx)(N.Z,{})]}),(0,L.jsxs)(Z.Z,{item:!0,xs:12,children:[(0,L.jsx)(I.Z,{variant:"contained",color:"secondary",className:t.button,onClick:(0,a.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B.pushLog("clockInLog","Execute manual clock in"),e.next=3,Ce();case 3:case"end":return e.stop()}}),e)}))),children:"Manual Clock In"}),(0,L.jsx)(I.Z,{variant:"contained",color:"default",className:t.button,onClick:function(){n.push("/attendance_log")},children:"Attendance Logs"}),(0,L.jsx)(I.Z,{variant:"contained",color:"default",className:t.button,onClick:function(){n.push("/clockin_log")},children:"Clock-In Logs"}),(0,L.jsx)(I.Z,{variant:"contained",color:"default",className:t.button,onClick:function(){n.push("/login")},children:"Back to Login Page"})]}),(0,L.jsx)(Z.Z,{item:!0,xs:12,children:(0,L.jsx)(b.Z,{variant:"subtitle1",color:"primary",gutterBottom:!0,children:o})}),(0,L.jsx)(Z.Z,{item:!0,xs:12,children:(0,L.jsx)(y.Z,{children:(0,L.jsxs)(w.Z,{className:t.table,"aria-label":"simple table",children:[(0,L.jsx)(D.Z,{children:(0,L.jsxs)(A.Z,{children:[(0,L.jsx)(E.Z,{children:"NAME"}),(0,L.jsx)(E.Z,{align:"center",children:"DATE"}),(0,L.jsx)(E.Z,{align:"center",children:"START TIME"}),(0,L.jsx)(E.Z,{align:"center",children:"END TIME"})]})}),(0,L.jsx)(C.Z,{children:Te.map((function(e){return(0,L.jsxs)(A.Z,{children:[(0,L.jsx)(E.Z,{component:"th",scope:"row",children:e.name}),(0,L.jsx)(E.Z,{align:"center",children:e.date}),(0,L.jsx)(E.Z,{align:"center",children:e.startTime}),(0,L.jsx)(E.Z,{align:"center",children:e.endTime})]},e.key)}))})]})})})]})})]})}},8740:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4273)}])}},function(e){e.O(0,[259,992,933,672,910,774,888,179],(function(){return t=8740,e(e.s=t);var t}));var t=e.O();_N_E=t}]);