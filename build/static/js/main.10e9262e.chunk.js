(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(18),i=s.n(n),l=(s(25),s(11)),r=s(20),o=(s(26),s(8)),j=s(0);function b(e){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(o.b,{className:"navbar-brand",to:"/",children:e.title}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(j.jsxs)("form",{className:"d-flex",children:[Object(j.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(j.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]}),Object(j.jsx)("img",{src:"images/icons8-todo-list-64-white.png"})]})})}b.defaultProps={title:"Your Title Here",searchBar:!0};var d=function(e){var t=e.todo,s=e.onDelete;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:t.title}),Object(j.jsx)("p",{children:t.desc}),Object(j.jsx)("button",{className:"btn btn-sm btn-outline-danger",onClick:function(){s(t)},children:Object(j.jsx)("span",{children:"Delete"})})]}),Object(j.jsx)("hr",{})]})},h=function(e){return Object(j.jsxs)("div",{className:"container",style:{minHeight:"70vh",margin:"40px auto"},children:[Object(j.jsx)("h3",{className:"my-2 text-center",children:"Your Tasks for Today"}),0===e.todos.length?Object(j.jsx)("p",{children:"No Todos to display"}):e.todos.map((function(t){return console.log(t.sno),Object(j.jsx)(d,{todo:t,onDelete:e.onDelete},t.sno)}))]})},m=function(){return Object(j.jsx)("footer",{className:" text-dark py-3 footer",children:Object(j.jsx)("h6",{className:"text-center",children:Object(j.jsx)("span",{children:"Copyright \xa9 The Task List"})})})},g=function(e){var t=e.addTodo,s=Object(a.useState)(""),c=Object(l.a)(s,2),n=c[0],i=c[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),b=o[0],d=o[1];return Object(j.jsxs)("div",{className:"container mt-5 addtodo",children:[Object(j.jsx)("h2",{className:"text-center",children:"Want to Add Something to the Chores?"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n&&b?(t(n,b),i(""),d("")):alert("Title or Description cannot be blank")},children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"title",className:"form-label",children:"What is the Task?"}),Object(j.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Can you explain it a little more?"}),Object(j.jsx)("input",{type:"text",value:b,onChange:function(e){return d(e.target.value)},className:"form-control",id:"desc"})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-m btn-outline-success",children:"Let's Add it to List"})]})]})},u=function(){return Object(j.jsxs)("div",{className:"container my-5 about p-3",children:[Object(j.jsx)("h2",{className:"text-center p-2",children:"Brought to you by"}),Object(j.jsxs)("div",{className:"profiles",children:[Object(j.jsxs)("div",{className:"profile p-5",children:[Object(j.jsx)("img",{src:"images/sahil.png"}),Object(j.jsx)("h3",{className:"m-2",children:"Sahil Kaushal"}),Object(j.jsxs)("div",{className:"links",children:[Object(j.jsx)("a",{target:"_blank",href:"https://instagram.com/sahil_kaushal2151?utm_medium=copy_link",children:Object(j.jsx)("img",{src:"images/icons8-instagram-64.png"})}),Object(j.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/sahil-kaushal-180791191",children:Object(j.jsx)("img",{src:"images/icons8-linkedin-64.png"})})]})]}),Object(j.jsxs)("div",{className:"profile p-5",children:[Object(j.jsx)("img",{src:"images/garvit.png"}),Object(j.jsx)("h3",{className:"m-2",children:"Garvit K Rai"}),Object(j.jsxs)("div",{className:"links",children:[Object(j.jsx)("a",{target:"_blank",href:"https://www.instagram.com/garvitrai013/",children:Object(j.jsx)("img",{src:"images/icons8-instagram-64.png"})}),Object(j.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/garvit-k-rai-48185911a/",children:Object(j.jsx)("img",{src:"images/icons8-linkedin-64.png"})})]})]}),Object(j.jsxs)("div",{className:"profile p-5",children:[Object(j.jsx)("img",{src:"images/anshul.png"}),Object(j.jsx)("h3",{className:"m-2",children:"Anshul K Singh"}),Object(j.jsxs)("div",{className:"links",children:[Object(j.jsx)("a",{target:"_blank",href:"https://instagram.com/sahil_kaushal2151?utm_medium=copy_link",children:Object(j.jsx)("img",{src:"images/icons8-instagram-64.png"})}),Object(j.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/sahil-kaushal-180791191",children:Object(j.jsx)("img",{src:"images/icons8-linkedin-64.png"})})]})]})]})]})},x=s(2);var O=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("I am ondelete of todo",e),d(i.filter((function(t){return t!==e}))),console.log("deleted",i),localStorage.setItem("todos",JSON.stringify(i))},s=function(e,t){console.log("I am adding this todo",e,t);var s={sno:0===i.length?0:i[i.length-1].sno+1,title:e,desc:t};d([].concat(Object(r.a)(i),[s])),console.log(s)},c=Object(a.useState)(e),n=Object(l.a)(c,2),i=n[0],d=n[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(i))}),[i]),Object(j.jsx)("div",{className:"pagestyle",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(b,{title:"Tasks",searchBar:!1}),Object(j.jsxs)(x.c,{children:[Object(j.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{addTodo:s}),Object(j.jsx)(h,{todos:i,onDelete:t})]})}}),Object(j.jsx)(x.a,{exact:!0,path:"/about",children:Object(j.jsx)(u,{})})]}),Object(j.jsx)(m,{})]})})},p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,34)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.10e9262e.chunk.js.map