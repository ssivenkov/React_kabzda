(this.webpackJsonpreact_kabzda=this.webpackJsonpreact_kabzda||[]).push([[0],[,,,function(e,t,n){e.exports={container:"UseEffectAsyncClock_container__26r63",contentContainer:"UseEffectAsyncClock_contentContainer__3NVcc",clock:"UseEffectAsyncClock_clock__vyjzK",analogClock:"UseEffectAsyncClock_analogClock__YtmS8",dial:"UseEffectAsyncClock_dial__UVlVY",seconds:"UseEffectAsyncClock_seconds__3IkYX",minutes:"UseEffectAsyncClock_minutes__fEsle",hours:"UseEffectAsyncClock_hours__21cbV"}},function(e,t,n){e.exports={container:"CustomSelect_container__Gw2Pv",select:"CustomSelect_select__kfdOq",positionContainer:"CustomSelect_positionContainer__LPj3P",optionContainer:"CustomSelect_optionContainer__2z5RK",option:"CustomSelect_option__3KkoD",selected:"CustomSelect_selected__2P1yQ"}},,,,,function(e,t,n){e.exports={container:"ControlledAccordion_container__1GrNQ",title:"ControlledAccordion_title__2x2X-"}},function(e,t,n){e.exports={container:"UncontrolledAccordion_container__2MNhB",title:"UncontrolledAccordion_title__2FRU5"}},function(e,t,n){e.exports={container:"ControlledRaiting_container__3w1YK",star:"ControlledRaiting_star__3Ccq5"}},function(e,t,n){e.exports={container:"UncontrolledRaiting_container__3OEhY",star:"UncontrolledRaiting_star__3mFM9"}},,,function(e,t,n){e.exports={container:"UncontrolledOnOff_container__1Bmsj"}},function(e,t,n){e.exports={container:"RefInput_container__2htyl"}},function(e,t,n){e.exports={container:"ControlledInput_container__bFjDl"}},function(e,t,n){e.exports={container:"ControlledCheckbox_container__2ChQ6"}},function(e,t,n){e.exports={container:"ControlledSelect_container__3PtJ4"}},function(e,t,n){e.exports={container:"UncontrolledInput_container__2N1eM"}},function(e,t,n){e.exports={container:"ReactMemo_container__qqQSd"}},function(e,t,n){e.exports={container:"UseMemo_container__bbwfk"}},function(e,t,n){e.exports={container:"UseMemoHelpReactMemo_container__158ZT",contentContainer:"UseMemoHelpReactMemo_contentContainer__1oJEx"}},function(e,t,n){e.exports={container:"UseCallback_container__axrxP",contentContainer:"UseCallback_contentContainer__2pkcO"}},function(e,t,n){e.exports={container:"UseState_container__6Iglu",contentContainer:"UseState_contentContainer__1HxQX"}},function(e,t,n){e.exports={container:"UseEffectSync_container__10ScT",contentContainer:"UseEffectSync_contentContainer__2fy7X"}},function(e,t,n){e.exports={container:"UseEffectAsync_container__djwYc",contentContainer:"UseEffectAsync_contentContainer__1pGa6"}},function(e,t,n){e.exports={container:"UseEffectCleanup_container__PuaQ3",contentContainer:"UseEffectCleanup_contentContainer__1BQt1"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(14),i=n.n(r),s=(n(33),n(2)),a=(n(34),n(9)),l=n.n(a),j=n(0);function u(e){return Object(j.jsxs)("div",{className:l.a.container,children:[Object(j.jsx)(d,{title:e.titleValue,onClick:function(){e.onClick(!e.collapsed)}}),!e.collapsed&&Object(j.jsx)(b,{items:e.items})]})}function d(e){return Object(j.jsx)("div",{children:Object(j.jsx)("span",{className:l.a.title,onClick:function(){e.onClick()},children:e.title})})}function b(e){return Object(j.jsx)("ul",{children:e.items.map((function(e,t){return Object(j.jsx)("li",{children:e.title},t)}))})}var O=n(15),x=n.n(O);function f(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],r={cursor:"pointer",border:"1px solid black",padding:"10px",backgroundColor:n?"green":"white"},i={cursor:"pointer",border:"1px solid black",padding:"10px",backgroundColor:n?"white":"red"},a={width:"20px",height:"20px",marginTop:"12px",borderRadius:"50%",marginLeft:"10px",backgroundColor:n?"green":"red"};return Object(j.jsxs)("div",{className:x.a.container,children:[Object(j.jsx)("span",{children:"Controlled switch"}),Object(j.jsxs)("div",{style:{display:"flex"},children:[Object(j.jsx)("div",{style:r,onClick:function(){o(!0)},children:"On"}),Object(j.jsx)("div",{style:i,onClick:function(){o(!1)},children:"Off"}),Object(j.jsx)("div",{style:a,children:" "})]})]})}function h(e){var t={cursor:"pointer",border:"1px solid black",padding:"10px",backgroundColor:e.on?"green":"white"},n={cursor:"pointer",border:"1px solid black",padding:"10px",backgroundColor:e.on?"white":"red"},c={width:"20px",height:"20px",marginTop:"12px",borderRadius:"50%",marginLeft:"10px",backgroundColor:e.on?"green":"red"};return Object(j.jsxs)("div",{style:{display:"inline-Block",padding:"10px",border:"1px solid green"},children:[Object(j.jsx)("span",{children:"Uncontrolled switch"}),Object(j.jsxs)("div",{style:{display:"flex"},children:[Object(j.jsx)("div",{style:t,onClick:function(){e.onChange(!0)},children:"On"}),Object(j.jsx)("div",{style:n,onClick:function(){e.onChange(!1)},children:"Off"}),Object(j.jsx)("div",{style:c,children:" "})]})]})}var v=n(13),m="TOGGLE-COLLAPSED",p=function(e,t){switch(t.type){case m:return Object(v.a)(Object(v.a)({},e),{},{collapsed:!e.collapsed});default:throw new Error("Bad action type")}},C=n(10),_=n.n(C);function g(e){var t=Object(c.useReducer)(p,{collapsed:!1}),n=Object(s.a)(t,2),o=n[0],r=n[1];return Object(j.jsxs)("div",{className:_.a.container,children:[Object(j.jsx)(k,{title:e.titleValue,onClick:function(){r({type:m})}}),!o.collapsed&&Object(j.jsx)(S,{})]})}function k(e){return Object(j.jsx)("div",{children:Object(j.jsx)("span",{className:_.a.title,onClick:function(){e.onClick()},children:e.title})})}function S(){return Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"1"}),Object(j.jsx)("li",{children:"2"}),Object(j.jsx)("li",{children:"3"})]})})}var y=n(11),E=n.n(y);function U(e){return Object(j.jsxs)("div",{className:E.a.container,children:[Object(j.jsx)("div",{children:"Controlled rating"}),Object(j.jsx)(w,{selected:e.value>0,onClick:e.onClick,value:1}),Object(j.jsx)(w,{selected:e.value>1,onClick:e.onClick,value:2}),Object(j.jsx)(w,{selected:e.value>2,onClick:e.onClick,value:3}),Object(j.jsx)(w,{selected:e.value>3,onClick:e.onClick,value:4}),Object(j.jsx)(w,{selected:e.value>4,onClick:e.onClick,value:5})]})}function w(e){return Object(j.jsx)("span",{className:E.a.star,onClick:function(){e.onClick(e.value)},children:e.selected?Object(j.jsx)("b",{children:"star "}):"star "})}var N=n(12),A=n.n(N);function M(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(j.jsxs)("div",{className:A.a.container,children:[Object(j.jsx)("div",{children:"Uncontrolled rating"}),Object(j.jsx)(R,{selected:n>0,setValue:function(){return o(1)}}),Object(j.jsx)(R,{selected:n>1,setValue:function(){return o(2)}}),Object(j.jsx)(R,{selected:n>2,setValue:function(){return o(3)}}),Object(j.jsx)(R,{selected:n>3,setValue:function(){return o(4)}}),Object(j.jsx)(R,{selected:n>4,setValue:function(){return o(5)}})]})}function R(e){return Object(j.jsx)("span",{className:A.a.star,onClick:function(){return e.setValue()},children:e.selected?Object(j.jsx)("b",{children:"star "}):"star "})}var T=n(4),V=n.n(T),D=function(e){var t=e.value,n=e.onChange,o=e.items,r=Object(c.useRef)(null),i=Object(c.useState)(!1),a=Object(s.a)(i,2),l=a[0],u=a[1],d=Object(c.useState)(t),b=Object(s.a)(d,2),O=b[0],x=b[1],f=o.find((function(e){return e.title===O})),h=Object(c.useState)(!1),v=Object(s.a)(h,2),m=v[0],p=v[1],C=function(){u(!l)};return Object(j.jsxs)("div",{className:V.a.container,children:[Object(j.jsx)("div",{children:"Custom select"}),Object(j.jsx)("div",{onClick:C,className:V.a.select,onKeyUp:function(e){switch(e.key){case"ArrowDown":for(var c=0;c<o.length;c++)o[c].title===t&&o[c+1]&&(x(o[c+1].title),n(o[c+1].title));break;case"ArrowUp":for(var r=0;r<o.length;r++)o[r].title===t&&o[r-1]&&(x(o[r-1].title),n(o[r-1].title));break;case"Enter":n(O),C();break;case"Escape":x(t),u(!1)}},onBlur:function(){return function(e){x(t),u(!1),m?(p(!1),e.current.focus()):e.current.blur()}(r)},tabIndex:0,ref:r,children:t||"none"}),l&&t&&Object(j.jsx)(I,{items:o,changeValue:n,hoveredElement:f,setHoveredItemTitle:x,setItemClicked:p})]})},I=function(e){var t=e.items,n=e.changeValue,c=e.hoveredElement,o=e.setHoveredItemTitle,r=e.setItemClicked;return Object(j.jsx)("div",{className:V.a.positionContainer,children:Object(j.jsx)("div",{className:V.a.optionContainer,children:t.map((function(e,t){return Object(j.jsx)("div",{onMouseEnter:function(){return o(e.title)},onMouseDown:function(){return t=e.title,n(t),void r(!0);var t},className:" ".concat(V.a.option," ").concat(e===c?V.a.selected:""," "),children:e.title},t)}))})})},F=n(16),P=n.n(F),L=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(c.useRef)(null);return Object(j.jsxs)("div",{className:P.a.container,children:[Object(j.jsx)("div",{children:"Uncontrolled input with ref"}),Object(j.jsx)("input",{ref:r}),Object(j.jsx)("button",{onClick:function(){var e=r.current;o(e.value)},children:"save"}),Object(j.jsxs)("div",{children:["actual value: ",n]})]})},B=n(17),H=n.n(B),K=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(j.jsxs)("div",{className:H.a.container,children:[Object(j.jsx)("div",{children:"Controlled input"}),Object(j.jsx)("input",{value:n,onChange:function(e){o(e.currentTarget.value)}})]})},Q=n(18),Y=n.n(Q),G=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(j.jsxs)("div",{className:Y.a.container,children:[Object(j.jsx)("div",{children:"Controlled checkbox"}),Object(j.jsx)("input",{type:"checkbox",onChange:function(e){o(e.currentTarget.checked)},checked:n})]})},J=n(19),q=n.n(J),z=function(){var e=Object(c.useState)("2"),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(j.jsxs)("div",{className:q.a.container,children:[Object(j.jsx)("div",{children:"Controlled select"}),Object(j.jsxs)("select",{value:n,onChange:function(e){o(e.currentTarget.value)},children:[Object(j.jsx)("option",{children:"none"}),Object(j.jsx)("option",{value:"1",children:"Moscow"}),Object(j.jsx)("option",{value:"2",children:"Minsk"}),Object(j.jsx)("option",{value:"3",children:"Kiev"})]})]})},X=n(20),Z=n.n(X),W=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(j.jsxs)("div",{className:Z.a.container,children:[Object(j.jsx)("div",{children:"Uncontrolled input"}),Object(j.jsx)("input",{onChange:function(e){var t=e.currentTarget.value;o(t)}}),Object(j.jsxs)("div",{children:["value: ",n]})]})},$=n(5),ee=n(21),te=n.n(ee),ne=function(e){return console.log("Counter render"),Object(j.jsx)("div",{children:e.count})},ce=function(e){return console.log("Users render"),Object(j.jsx)("div",{children:e.users.map((function(e,t){return Object(j.jsx)("div",{children:e},t)}))})},oe=o.a.memo(ne),re=o.a.memo(ce),ie=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(["Dimych","Valera","Artem"]),i=Object(s.a)(r,2),a=i[0],l=i[1];return Object(j.jsxs)("div",{className:te.a.container,children:[Object(j.jsx)("span",{children:"React.Memo"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return o(n+1)},children:"inc"}),Object(j.jsx)("button",{onClick:function(){var e=[].concat(Object($.a)(a),["Sveta ".concat((new Date).getTime())]);l(e)},children:"add user"})]}),Object(j.jsx)(oe,{count:n}),Object(j.jsx)(re,{users:a})]})},se=n(22),ae=n.n(se),le=function(){var e,t,n=Object(c.useState)(5),o=Object(s.a)(n,2),r=o[0],i=o[1],a=Object(c.useState)(5),l=Object(s.a)(a,2),u=l[0],d=l[1];e=Object(c.useMemo)((function(){for(var e=1,t=1;t<=r;t++)e*=t;return console.log("First field was changed"),e}),[r]),t=Object(c.useMemo)((function(){for(var e=1,t=1;t<=u;t++)e*=t;return console.log("Second field was changed"),e}),[u]);return Object(j.jsxs)("div",{className:ae.a.container,children:[Object(j.jsx)("div",{children:"useMemo. Find factorial:"}),Object(j.jsx)("input",{value:r,onChange:function(e){i(Number(e.currentTarget.value))}}),Object(j.jsx)("input",{value:u,onChange:function(e){d(+e.currentTarget.value)}}),Object(j.jsxs)("div",{children:["Result for a: ",e]}),Object(j.jsxs)("div",{children:["Result for b: ",t]})]})},je=n(23),ue=n.n(je),de=function(e){return console.log("Counter render"),Object(j.jsx)("div",{children:e.count})},be=function(e){return console.log("Users render"),Object(j.jsx)("div",{children:e.users.map((function(e,t){return Object(j.jsx)("div",{children:e},t)}))})},Oe=o.a.memo(de),xe=o.a.memo(be),fe=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(["Dimych","Valera","Artem","Katya"]),i=Object(s.a)(r,2),a=i[0],l=i[1],u=Object(c.useMemo)((function(){return a.filter((function(e){return e.toLowerCase().indexOf("a")>-1}))}),[a]);return Object(j.jsxs)("div",{className:ue.a.container,children:[Object(j.jsx)("span",{children:"useMemo help React.Memo"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return o(n+1)},children:"inc"}),Object(j.jsx)("button",{onClick:function(){var e=[].concat(Object($.a)(a),["Sveta ".concat((new Date).getTime())]);l(e)},children:"add user"})]}),Object(j.jsx)(Oe,{count:n}),Object(j.jsx)(xe,{users:u})]})},he=n(24),ve=n.n(he),me=function(e){return console.log("Counter render"),Object(j.jsx)("div",{children:e.count})},pe=function(e){return Object(j.jsx)("div",{children:e.books.map((function(e,t){return Object(j.jsx)("div",{children:e},t)}))})},Ce=o.a.memo(me),_e=o.a.memo(pe),ge=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(["React","Redux","JS"]),i=Object(s.a)(r,2),a=i[0],l=i[1];console.log("UseCallback render");var u=Object(c.useCallback)((function(){console.log("Books render");var e=[].concat(Object($.a)(a),["Angular ".concat((new Date).getTime())]);l(e)}),[a]);return Object(j.jsxs)("div",{className:ve.a.container,children:[Object(j.jsx)("span",{children:"useCallback"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return o(n+1)},children:"inc"}),Object(j.jsx)("button",{onClick:u,children:"add book"})]}),Object(j.jsx)(Ce,{count:n}),Object(j.jsx)(_e,{books:a})]})},ke=n(25),Se=n.n(ke);function ye(){return 329876595492}var Ee=function(){console.log("UseState render");var e=Object(c.useState)(ye),t=Object(s.a)(e,2),n=t[0],o=t[1],r=function(e){return e+1};return Object(j.jsxs)("div",{className:Se.a.container,children:[Object(j.jsx)("span",{children:"useState"}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){return o(r)},children:"inc"})}),n]})},Ue=n(26),we=n.n(Ue);function Ne(){return 329876595492}var Ae=function(){var e=Object(c.useState)(Ne),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){console.log("UseEffect sync render")})),Object(j.jsxs)("div",{className:we.a.container,children:[Object(j.jsx)("span",{children:"useEffect sync"}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){return o(n+1)},children:"inc"})}),n]})},Me=n(27),Re=n.n(Me);function Te(){return 0}var Ve=function(){var e=Object(c.useState)(Te),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){setInterval((function(){o((function(e){return e+1}))}),1e3)}),[]),Object(j.jsxs)("div",{className:Re.a.container,children:[Object(j.jsx)("span",{children:"useEffect async"}),Object(j.jsx)("div",{children:n})]})},De=n(3),Ie=n.n(De),Fe=function(e){var t=Object(c.useState)(new Date),n=Object(s.a)(t,2),o=n[0],r=n[1];Object(c.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(e)}}),[]);var i,a=function(e){return e<10?"0"+e:e};switch(e.mode){case"analog":i=Object(j.jsx)(Le,{get2digitsString:a,date:o});break;case"digital":default:i=Object(j.jsx)(Pe,{get2digitsString:a,date:o})}return Object(j.jsx)("div",{className:Ie.a.container,children:i})},Pe=function(e){e.get2digitsString;var t=e.date,n={transform:"rotate(".concat(6*t.getSeconds(),"deg)")},c={transform:"rotate(".concat(6*t.getMinutes(),"deg)")},o={transform:"rotate(".concat(30*t.getHours(),"deg)")};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{children:"useEffect async analog clock"}),Object(j.jsx)("div",{className:Ie.a.clock,children:Object(j.jsxs)("div",{className:Ie.a.analogClock,children:[Object(j.jsx)("div",{className:"".concat(Ie.a.dial," ").concat(Ie.a.seconds),style:n}),Object(j.jsx)("div",{className:"".concat(Ie.a.dial," ").concat(Ie.a.minutes),style:c}),Object(j.jsx)("div",{className:"".concat(Ie.a.dial," ").concat(Ie.a.hours),style:o})]})})]})},Le=function(e){var t=e.get2digitsString,n=e.date;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{children:"useEffect async digital clock"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{children:[t(n.getHours()),":"]}),Object(j.jsxs)("span",{children:[t(n.getMinutes()),":"]}),Object(j.jsxs)("span",{children:[t(n.getSeconds())," "]})]})]})},Be=n(28),He=n.n(Be),Ke=function(){var e=Object(c.useState)(1),t=Object(s.a)(e,2),n=t[0],o=t[1];console.log("Component rendered with: "+n),Object(c.useEffect)((function(){return console.log("Effect occurred: "+n),function(){console.log("RESET EFFECT: "+n)}}),[n]);return Object(j.jsxs)("div",{className:He.a.container,children:[Object(j.jsx)("span",{children:"UseEffect cleanup"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{children:["Counter: ",n]}),Object(j.jsx)("button",{onClick:function(){o(n+1)},children:"+"})]})]})},Qe=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(!0),i=Object(s.a)(r,2),a=i[0],l=i[1];Object(c.useEffect)((function(){var e=function(e){console.log(e.key),o((function(t){return t+e.key}))};return a&&window.addEventListener("keypress",e),function(){window.removeEventListener("keypress",e)}}),[a]);var u={cursor:"pointer",backgroundColor:a?"green":"white"},d={cursor:"pointer",backgroundColor:a?"white":"red"};return Object(j.jsxs)("div",{className:Ie.a.container,children:[Object(j.jsx)("span",{children:"UseEffect keys tracker"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{style:u,onClick:function(){l(!0)},children:"on tracking"}),Object(j.jsx)("button",{style:d,onClick:function(){l(!1)},children:"off tracking"}),Object(j.jsxs)("div",{children:["Typed text: ",n]})]})]})};var Ye=function(){function e(e){return Object(j.jsx)("h3",{children:e.title})}var t=Object(c.useState)(0),n=Object(s.a)(t,2),r=n[0],i=n[1],a=Object(c.useState)(!1),l=Object(s.a)(a,2),d=l[0],b=l[1],O=Object(c.useState)(!1),x=Object(s.a)(O,2),v=x[0],m=x[1],p=Object(c.useState)("none"),C=Object(s.a)(p,2),_=C[0],k=C[1],S=o.a.memo(f),y=o.a.memo(h),E=o.a.memo(u),w=o.a.memo(g),N=o.a.memo(U),A=o.a.memo(M),R=o.a.memo(z),T=o.a.memo(W),V=o.a.memo(L),I=o.a.memo(K),F=o.a.memo(G);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(e,{title:"This is APP components:"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(S,{}),Object(j.jsx)(y,{on:v,onChange:function(e){return m(e)}}),Object(j.jsx)(E,{titleValue:"Controlled accordion",collapsed:d,onClick:b,items:[{title:"Dimych",value:1},{title:"Valera",value:2},{title:"Artem",value:3}]}),Object(j.jsx)(w,{titleValue:"Uncontrolled accordion"}),Object(j.jsx)(N,{value:r,onClick:i}),Object(j.jsx)(A,{}),Object(j.jsx)(R,{}),Object(j.jsx)(D,{value:_,onChange:k,items:[{title:"none",value:0},{title:"Dimych",value:1},{title:"Valera",value:2},{title:"Artem",value:3}]}),Object(j.jsx)(I,{}),Object(j.jsx)(T,{}),Object(j.jsx)(V,{}),Object(j.jsx)(F,{}),Object(j.jsx)(ie,{}),Object(j.jsx)(le,{}),Object(j.jsx)(fe,{}),Object(j.jsx)(ge,{}),Object(j.jsx)(Ee,{}),Object(j.jsx)(Ae,{}),Object(j.jsx)(Ve,{}),Object(j.jsx)(Fe,{mode:"digital"}),Object(j.jsx)(Fe,{mode:"analog"}),Object(j.jsx)(Ke,{}),Object(j.jsx)(Qe,{})]})]})},Ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(Ye,{}),document.getElementById("root")),Ge()}],[[36,1,2]]]);
//# sourceMappingURL=main.b10cec00.chunk.js.map