(this["webpackJsonpinsta-tools"]=this["webpackJsonpinsta-tools"]||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(21),s=n.n(r),i=(n(63),n(64),n(65),n(103)),o=n(102),j=n(23),l=n(97),b=n(100),u=(n(66),n(4));var d=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],s=function(){return r(!1)};return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(l.a,{variant:"navbar-btn",onClick:function(){return r(!0)},children:"About Me"}),Object(u.jsxs)(b.a,{show:n,onHide:s,children:[Object(u.jsx)(b.a.Header,{children:Object(u.jsx)(b.a.Title,{children:"About Me"})}),Object(u.jsx)(b.a.Body,{children:Object(u.jsxs)("div",{className:"d-flex flex-column",children:[Object(u.jsxs)("div",{className:"d-flex justify-content-center",children:["Designed & Developed with ",Object(u.jsx)("span",{className:"heart animate__animated animate__heartBeat animate__infinite px-1",children:"\u2665"})," by"," ",Object(u.jsx)("a",{className:"px-1",href:"https://github.com/anushibin007/insta-tools",children:"Anu Shibin Joseph Raj"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"d-flex justify-content-center",children:Object(u.jsx)("img",{src:"https://www.freevisitorcounters.com/en/counter/render/836517/t/0",border:"0",className:"counterimg",alt:"Visitor Counter"})})]})}),Object(u.jsx)(b.a.Footer,{children:Object(u.jsx)(l.a,{variant:"info",onClick:s,children:"Close"})})]})]})},h={INSTA_TOOLS_BACKEND_SERVER:"https://insta-tools-backend.herokuapp.com/",APPLICATION_CONTEXT_PATH:"/insta-tools"};var O=function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)(i.a,{bg:"light",expand:"lg",children:[Object(u.jsx)(i.a.Brand,{href:h.APPLICATION_CONTEXT_PATH,children:"Instagram Tools"}),Object(u.jsx)(i.a.Toggle,{"aria-controls":"insta-tools-navbar"}),Object(u.jsx)(i.a.Collapse,{id:"insta-tools-navbar",children:Object(u.jsx)(o.a,{className:"mr-auto",children:Object(u.jsx)(d,{})})})]}),Object(u.jsx)("img",{src:"https://www.freevisitorcounters.com/en/home/counter/836517/t/0",style:{display:"none"},alt:"Visitor Counter Invoker"})]})},x=n(99),m=(n(71),n(72),n(73),n(57)),f=n(7),p=n(101),g=function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),c=n[0],r=n[1];return Object(u.jsxs)(p.a,{onSubmit:function(t){t.preventDefault(),e.history.push("dp/"+c)},children:[Object(u.jsxs)(p.a.Group,{controlId:"username",children:[Object(u.jsx)(p.a.Label,{children:"Instagram Username"}),Object(u.jsx)(p.a.Control,{type:"text",placeholder:"Enter an Instagram user's username",onChange:function(e){r(e.target.value)},required:!0})]}),Object(u.jsx)("br",{}),Object(u.jsx)(l.a,{variant:"primary",type:"submit",children:"Submit"})]})},v=n(104),T=n(98),C=n(54),_=n(55),N=n(56),A=n.n(N),S=new(function(){function e(){Object(C.a)(this,e)}return Object(_.a)(e,[{key:"getDpUrl",value:function(e){return A.a.get(h.INSTA_TOOLS_BACKEND_SERVER+"/dp/"+e)}}]),e}()),y=function(e){var t=Object(a.useState)(e.match.params.username),n=Object(j.a)(t,1)[0],r=Object(a.useState)(""),s=Object(j.a)(r,2),i=s[0],o=s[1];Object(a.useEffect)((function(){S.getDpUrl(n).then((function(e){o(e.data)})).catch((function(e){console.log(e),o("500")}))}),[n]);return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsxs)(T.a,{variant:"primary",children:["Username: ",n]}),""===i?Object(u.jsx)(v.a,{animated:!0,now:100}):"500"===i?Object(u.jsx)(T.a,{variant:"danger",children:"There was an error processing DP URL for your request"}):Object(u.jsx)(T.a,{variant:"secondary",children:Object(u.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:"Show DP"})})]})};var I=function(){return Object(u.jsxs)(x.a,{children:[Object(u.jsx)(O,{}),Object(u.jsx)("br",{}),Object(u.jsx)(m.a,{basename:h.APPLICATION_CONTEXT_PATH,children:Object(u.jsxs)(f.c,{children:[Object(u.jsx)(f.a,{path:"/",exact:!0,component:g}),Object(u.jsx)(f.a,{path:"/dp/:username",component:y})]})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),w()}},[[95,1,2]]]);
//# sourceMappingURL=main.8d71c4c5.chunk.js.map