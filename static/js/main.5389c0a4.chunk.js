(this.webpackJsonpreact_kabzda=this.webpackJsonpreact_kabzda||[]).push([[0],[,,,function(e,t,n){e.exports={container:"CustomSelect_container__Gw2Pv",select:"CustomSelect_select__kfdOq",positionContainer:"CustomSelect_positionContainer__LPj3P",optionContainer:"CustomSelect_optionContainer__2z5RK",option:"CustomSelect_option__3KkoD",selected:"CustomSelect_selected__2P1yQ"}},,,,,function(e,t,n){e.exports={container:"ControlledAccordion_container__1GrNQ",title:"ControlledAccordion_title__2x2X-"}},function(e,t,n){e.exports={container:"UncontrolledAccordion_container__2MNhB",title:"UncontrolledAccordion_title__2FRU5"}},function(e,t,n){e.exports={container:"ControlledRaiting_container__3w1YK",star:"ControlledRaiting_star__3Ccq5"}},function(e,t,n){e.exports={container:"UncontrolledRaiting_container__3OEhY",star:"UncontrolledRaiting_star__3mFM9"}},,,function(e,t,n){e.exports={container:"UncontrolledOnOff_container__1Bmsj"}},function(e,t,n){e.exports={container:"RefInput_container__2htyl"}},function(e,t,n){e.exports={container:"ControlledInput_container__bFjDl"}},function(e,t,n){e.exports={container:"ControlledCheckbox_container__2ChQ6"}},function(e,t,n){e.exports={container:"ControlledSelect_container__3PtJ4"}},function(e,t,n){e.exports={container:"UncontrolledInput_container__2N1eM"}},function(e,t,n){e.exports={container:"ReactMemo_container__qqQSd"}},function(e,t,n){e.exports={container:"UseMemo_container__bbwfk"}},function(e,t,n){e.exports={container:"UseMemoHelpReactMemo_container__158ZT",contentContainer:"UseMemoHelpReactMemo_contentContainer__1oJEx"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(13),r=n.n(i),a=(n(27),n(2)),l=(n(28),n(8)),s=n.n(l),j=n(0);function u(e){return Object(j.jsxs)("div",{className:s.a.container,children:[Object(j.jsx)(d,{title:e.titleValue,onClick:function(){e.onClick(!e.collapsed)}}),!e.collapsed&&Object(j.jsx)(b,{items:e.items})]})}function d(e){return Object(j.jsx)("div",{children:Object(j.jsx)("span",{className:s.a.title,onClick:function(){e.onClick()},children:e.title})})}function b(e){return Object(j.jsx)("ul",{children:e.items.map((function(e,t){return Object(j.jsx)("li",{children:e.title},t)}))})}var O=n(14),x=n.n(O);function h(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],o=t[1],i={cursor:"pointer",border:"1px solid black",padding:"10px",backgroundColor:n?"green":"white"},r={cursor:"pointer",border:"1px solid black",padding:"10px",backgroundColor:n?"white":"red"},l={width:"20px",height:"20px",marginTop:"12px",borderRadius:"50%",marginLeft:"10px",backgroundColor:n?"green":"red"};return Object(j.jsxs)("div",{className:x.a.container,children:[Object(j.jsx)("span",{children:"Controlled switch"}),Object(j.jsxs)("div",{style:{display:"flex"},children:[Object(j.jsx)("div",{style:i,onClick:function(){o(!0)},children:"On"}),Object(j.jsx)("div",{style:r,onClick:function(){o(!1)},children:"Off"}),Object(j.jsx)("div",{style:l,children:" "})]})]})}function v(e){var t={cursor:"pointer",border:"1px solid black",padding:"10px",backgroundColor:e.on?"green":"white"},n={cursor:"pointer",border:"1px solid black",padding:"10px",backgroundColor:e.on?"white":"red"},c={width:"20px",height:"20px",marginTop:"12px",borderRadius:"50%",marginLeft:"10px",backgroundColor:e.on?"green":"red"};return Object(j.jsxs)("div",{style:{display:"inline-Block",padding:"10px",border:"1px solid green"},children:[Object(j.jsx)("span",{children:"Uncontrolled switch"}),Object(j.jsxs)("div",{style:{display:"flex"},children:[Object(j.jsx)("div",{style:t,onClick:function(){e.onChange(!0)},children:"On"}),Object(j.jsx)("div",{style:n,onClick:function(){e.onChange(!1)},children:"Off"}),Object(j.jsx)("div",{style:c,children:" "})]})]})}var f=n(12),m="TOGGLE-COLLAPSED",p=function(e,t){switch(t.type){case m:return Object(f.a)(Object(f.a)({},e),{},{collapsed:!e.collapsed});default:throw new Error("Bad action type")}return e},C=n(9),_=n.n(C);function g(e){var t=Object(c.useReducer)(p,{collapsed:!1}),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(j.jsxs)("div",{className:_.a.container,children:[Object(j.jsx)(k,{title:e.titleValue,onClick:function(){i({type:m})}}),!o.collapsed&&Object(j.jsx)(S,{})]})}function k(e){return Object(j.jsx)("div",{children:Object(j.jsx)("span",{className:_.a.title,onClick:function(){e.onClick()},children:e.title})})}function S(){return Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"1"}),Object(j.jsx)("li",{children:"2"}),Object(j.jsx)("li",{children:"3"})]})})}var w=n(10),y=n.n(w);function N(e){return Object(j.jsxs)("div",{className:y.a.container,children:[Object(j.jsx)("div",{children:"Controlled rating"}),Object(j.jsx)(R,{selected:e.value>0,onClick:e.onClick,value:1}),Object(j.jsx)(R,{selected:e.value>1,onClick:e.onClick,value:2}),Object(j.jsx)(R,{selected:e.value>2,onClick:e.onClick,value:3}),Object(j.jsx)(R,{selected:e.value>3,onClick:e.onClick,value:4}),Object(j.jsx)(R,{selected:e.value>4,onClick:e.onClick,value:5})]})}function R(e){return Object(j.jsx)("span",{className:y.a.star,onClick:function(){e.onClick(e.value)},children:e.selected?Object(j.jsx)("b",{children:"star "}):"star "})}var U=n(11),M=n.n(U);function T(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(j.jsxs)("div",{className:M.a.container,children:[Object(j.jsx)("div",{children:"Uncontrolled rating"}),Object(j.jsx)(V,{selected:n>0,setValue:function(){return o(1)}}),Object(j.jsx)(V,{selected:n>1,setValue:function(){return o(2)}}),Object(j.jsx)(V,{selected:n>2,setValue:function(){return o(3)}}),Object(j.jsx)(V,{selected:n>3,setValue:function(){return o(4)}}),Object(j.jsx)(V,{selected:n>4,setValue:function(){return o(5)}})]})}function V(e){return Object(j.jsx)("span",{className:M.a.star,onClick:function(){return e.setValue()},children:e.selected?Object(j.jsx)("b",{children:"star "}):"star "})}var A=n(3),D=n.n(A),E=function(e){var t=e.value,n=e.onChange,o=e.items,i=Object(c.useRef)(null),r=Object(c.useState)(!1),l=Object(a.a)(r,2),s=l[0],u=l[1],d=Object(c.useState)(t),b=Object(a.a)(d,2),O=b[0],x=b[1],h=o.find((function(e){return e.title===O})),v=function(){u(!s)};return Object(j.jsxs)("div",{className:D.a.container,children:[Object(j.jsx)("div",{children:"Custom select"}),Object(j.jsx)("div",{onClick:v,className:D.a.select,onKeyUp:function(e){switch(console.log(e.key),e.key){case"ArrowDown":for(var c=0;c<o.length;c++)o[c].title===t&&o[c+1]&&(x(o[c+1].title),n(o[c+1].title));break;case"ArrowUp":for(var i=0;i<o.length;i++)o[i].title===t&&o[i-1]&&(x(o[i-1].title),n(o[i-1].title));break;case"Enter":n(O),v();break;case"Escape":x(t),u(!1)}},tabIndex:0,ref:i,children:t||"none"}),s&&t&&Object(j.jsx)(F,{items:o,changeValue:n,unCollapsed:s,setUnCollapsed:u,hoveredElement:h,setHoveredItemTitle:x,selectRef:i})]})},F=function(e){var t=e.items,n=e.changeValue,c=e.unCollapsed,o=e.setUnCollapsed,i=e.hoveredElement,r=e.setHoveredItemTitle,a=e.selectRef;return Object(j.jsx)("div",{className:D.a.positionContainer,children:Object(j.jsx)("div",{className:D.a.optionContainer,children:t.map((function(e,t){return Object(j.jsx)("div",{onMouseEnter:function(){return r(e.title)},onClick:function(){return t=e.title,n(t),o(!c),void a.current.focus();var t},className:" ".concat(D.a.option," ").concat(e===i?D.a.selected:""," "),children:e.title},t)}))})})},P=n(15),L=n.n(P),I=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(c.useRef)(null);return Object(j.jsxs)("div",{className:L.a.container,children:[Object(j.jsx)("div",{children:"Uncontrolled input with ref"}),Object(j.jsx)("input",{ref:i}),Object(j.jsx)("button",{onClick:function(){var e=i.current;o(e.value)},children:"save"}),Object(j.jsxs)("div",{children:["actual value: ",n]})]})},B=n(16),K=n.n(B),q=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(j.jsxs)("div",{className:K.a.container,children:[Object(j.jsx)("div",{children:"Controlled input"}),Object(j.jsx)("input",{value:n,onChange:function(e){o(e.currentTarget.value)}})]})},G=n(17),H=n.n(G),J=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(j.jsxs)("div",{className:H.a.container,children:[Object(j.jsx)("div",{children:"Controlled checkbox"}),Object(j.jsx)("input",{type:"checkbox",onChange:function(e){o(e.currentTarget.checked)},checked:n})]})},Q=n(18),z=n.n(Q),Y=function(){var e=Object(c.useState)("2"),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(j.jsxs)("div",{className:z.a.container,children:[Object(j.jsx)("div",{children:"Controlled select"}),Object(j.jsxs)("select",{value:n,onChange:function(e){o(e.currentTarget.value)},children:[Object(j.jsx)("option",{children:"none"}),Object(j.jsx)("option",{value:"1",children:"Moscow"}),Object(j.jsx)("option",{value:"2",children:"Minsk"}),Object(j.jsx)("option",{value:"3",children:"Kiev"})]})]})},X=n(19),Z=n.n(X),W=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(j.jsxs)("div",{className:Z.a.container,children:[Object(j.jsx)("div",{children:"Uncontrolled input"}),Object(j.jsx)("input",{onChange:function(e){var t=e.currentTarget.value;o(t)}}),Object(j.jsxs)("div",{children:["value: ",n]})]})},$=n(6),ee=n(20),te=n.n(ee),ne=function(e){return console.log("Counter render"),Object(j.jsx)("div",{children:e.count})},ce=function(e){return console.log("Users render"),Object(j.jsx)("div",{children:e.users.map((function(e,t){return Object(j.jsx)("div",{children:e},t)}))})},oe=o.a.memo(ne),ie=o.a.memo(ce),re=function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(["Dimych","Valera","Artem"]),r=Object(a.a)(i,2),l=r[0],s=r[1];return Object(j.jsxs)("div",{className:te.a.container,children:[Object(j.jsx)("span",{children:"React.Memo"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return o(n+1)},children:"inc"}),Object(j.jsx)("button",{onClick:function(){var e=[].concat(Object($.a)(l),["Sveta ".concat((new Date).getTime())]);s(e)},children:"add user"})]}),Object(j.jsx)(oe,{count:n}),Object(j.jsx)(ie,{users:l})]})},ae=n(21),le=n.n(ae),se=function(){var e,t,n=Object(c.useState)(5),o=Object(a.a)(n,2),i=o[0],r=o[1],l=Object(c.useState)(5),s=Object(a.a)(l,2),u=s[0],d=s[1];e=Object(c.useMemo)((function(){for(var e=1,t=1;t<=i;t++)e*=t;return console.log("First field was changed"),e}),[i]),t=Object(c.useMemo)((function(){for(var e=1,t=1;t<=u;t++)e*=t;return console.log("Second field was changed"),e}),[u]);return Object(j.jsxs)("div",{className:le.a.container,children:[Object(j.jsx)("div",{children:"useMemo. Find factorial:"}),Object(j.jsx)("input",{value:i,onChange:function(e){r(Number(e.currentTarget.value))}}),Object(j.jsx)("input",{value:u,onChange:function(e){d(+e.currentTarget.value)}}),Object(j.jsxs)("div",{children:["Result for a: ",e]}),Object(j.jsxs)("div",{children:["Result for b: ",t]})]})},je=n(22),ue=n.n(je),de=function(e){return console.log("Counter render"),Object(j.jsx)("div",{children:e.count})},be=function(e){return console.log("Users render"),Object(j.jsx)("div",{children:e.users.map((function(e,t){return Object(j.jsx)("div",{children:e},t)}))})},Oe=o.a.memo(de),xe=o.a.memo(be),he=function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(["Dimych","Valera","Artem","Katya"]),r=Object(a.a)(i,2),l=r[0],s=r[1],u=Object(c.useMemo)((function(){return l.filter((function(e){return e.toLowerCase().indexOf("a")>-1}))}),[l]);return Object(j.jsxs)("div",{className:ue.a.container,children:[Object(j.jsx)("span",{children:"useMemo help React.Memo"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return o(n+1)},children:"inc"}),Object(j.jsx)("button",{onClick:function(){var e=[].concat(Object($.a)(l),["Sveta ".concat((new Date).getTime())]);s(e)},children:"add user"})]}),Object(j.jsx)(Oe,{count:n}),Object(j.jsx)(xe,{users:u})]})};var ve=function(){function e(e){return Object(j.jsx)("h3",{children:e.title})}var t=Object(c.useState)(0),n=Object(a.a)(t,2),i=n[0],r=n[1],l=Object(c.useState)(!1),s=Object(a.a)(l,2),d=s[0],b=s[1],O=Object(c.useState)(!1),x=Object(a.a)(O,2),f=x[0],m=x[1],p=Object(c.useState)("none"),C=Object(a.a)(p,2),_=C[0],k=C[1],S=o.a.memo(h),w=o.a.memo(v),y=o.a.memo(u),R=o.a.memo(g),U=o.a.memo(N),M=o.a.memo(T),V=o.a.memo(Y),A=o.a.memo(E),D=o.a.memo(W),F=o.a.memo(I),P=o.a.memo(q),L=o.a.memo(J);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(e,{title:"This is APP components:"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(S,{}),Object(j.jsx)(w,{on:f,onChange:function(e){return m(e)}}),Object(j.jsx)(y,{titleValue:"Controlled accordion",collapsed:d,onClick:b,items:[{title:"Dimych",value:1},{title:"Valera",value:2},{title:"Artem",value:3}]}),Object(j.jsx)(R,{titleValue:"Uncontrolled accordion"}),Object(j.jsx)(U,{value:i,onClick:r}),Object(j.jsx)(M,{}),Object(j.jsx)(V,{}),Object(j.jsx)(A,{value:_,onChange:k,items:[{title:"none",value:0},{title:"Dimych",value:1},{title:"Valera",value:2},{title:"Artem",value:3}]}),Object(j.jsx)(P,{}),Object(j.jsx)(D,{}),Object(j.jsx)(F,{}),Object(j.jsx)(L,{}),Object(j.jsx)(re,{}),Object(j.jsx)(se,{}),Object(j.jsx)(he,{})]})]})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(ve,{}),document.getElementById("root")),fe()}],[[30,1,2]]]);
//# sourceMappingURL=main.5389c0a4.chunk.js.map