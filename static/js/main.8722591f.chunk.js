(this["webpackJsonpkeeps-project"]=this["webpackJsonpkeeps-project"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(11),l=n.n(i),a=(n(41),n(32)),s=n(19),o=(n(42),n(28)),r=n.n(o),j=n(2),u=function(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h2",{children:"R Keeps"}),Object(j.jsx)(r.a,{style:{fontSize:"5rem"}}),Object(j.jsx)("a",{href:"https://ishubhamrana.github.io/index.html",target:"_blank",children:Object(j.jsx)("img",{src:"src\\Capture.PNG",alt:"Developer"})})]})},d=n(30),b=n.n(d),h=n(65),O=function(e){return Object(j.jsxs)("div",{className:"note-box",id:e.id,children:[Object(j.jsxs)("div",{className:"note-top",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsx)(h.a,{variant:"contained",style:{width:"4rem",height:"3rem"},onClick:function(){e.onDelete(e.id)},children:Object(j.jsx)(b.a,{})})]}),Object(j.jsx)("p",{children:e.content})]})},m=n(66),p=n(31),x=n.n(p),f=function(e){var t=Object(c.useState)(),n=Object(s.a)(t,2),i=n[0],l=n[1],a=Object(c.useState)(),o=Object(s.a)(a,2),r=o[0],u=o[1];document.getElementById("inTitle");return Object(j.jsxs)("div",{className:"input-bar",children:[Object(j.jsx)("input",{name:"title",className:"title",style:{display:"none"},id:"inTitle",placeholder:"Title",onChange:function(e){l(e.target.value)}}),Object(j.jsx)("input",{name:"note",id:"inContent",placeholder:"Add a Note",onChange:function(e){u(e.target.value)},onClick:function(){document.getElementById("inTitle").style.display="inline-block"}}),Object(j.jsx)(m.a,{className:"btn",onClick:function(){e.onInput(i,r)},style:{width:"5rem",height:"5rem"},children:Object(j.jsx)(x.a,{})})]})};var v=function(){var e=Object(c.useState)([{title:null,content:null}]),t=Object(s.a)(e,2),n=t[0],i=t[1],l=function(e){i(n.filter((function(t,n){return e!=n})))},o=n.map((function(e,t){if(0!=t)return Object(j.jsx)(O,{title:e.title,content:e.content,id:t,onDelete:l})}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsx)("div",{className:"input-container",children:Object(j.jsx)(f,{onInput:function(e,t){i((function(n){return[].concat(Object(a.a)(n),[{title:e,content:t}])}));var n=document.getElementById("inContent"),c=document.getElementById("inTitle");n.value=null,c.value=null,c.style.display="none"}})}),Object(j.jsx)("div",{className:"note-container",children:o})]})};l.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.8722591f.chunk.js.map