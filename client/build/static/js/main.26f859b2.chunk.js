(this["webpackJsonpaccess-frontend"]=this["webpackJsonpaccess-frontend"]||[]).push([[0],{27:function(e,a,t){e.exports=t.p+"static/media/plan.99b8565b.svg"},31:function(e,a,t){e.exports=t.p+"static/media/stepup.4496f253.svg"},36:function(e,a,t){e.exports=t(51)},39:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=(t(38),t(6)),r=t(3),l=(t(39),"localhost:3000"==window.location.host?"http://localhost:7000":""),s=function(e,a){return e.location.pathname===a?{color:"#2ecc72"}:{color:"#FFFFFF"}},m=Object(r.f)((function(e){var a=e.history;return c.a.createElement("div",null,c.a.createElement("ul",{className:"nav nav-tabs bg-dark"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{style:s(a,"/"),className:"nav-link",to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{style:s(a,"/admin/dashboard"),className:"nav-link",to:"/admin/dashboard"},"DashBoard")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{style:s(a,"/about"),className:"nav-link",to:"/about"},"About"))))})),i=function(e){var a=e.title,t=void 0===a?"My Title":a,n=e.description,o=void 0===n?"My desription":n,r=e.className,l=void 0===r?"bg-dark text-white p-4":r,s=e.children;return c.a.createElement("div",null,c.a.createElement(m,null),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"jumbotron bg-dark text-white text-center"},c.a.createElement("h2",{className:"display-4"},t),c.a.createElement("p",{className:"lead"},o)),c.a.createElement("div",{className:l},s)),c.a.createElement("footer",{className:"footer bg-dark mt-auto py-3"},c.a.createElement("div",{className:"container-fluid bg-success text-white text-center py-3",style:{marginTop:100}},c.a.createElement("h4",null,"If you got any questions, feel free to reach out!"),c.a.createElement("button",{className:"btn btn-warning btn-lg"},c.a.createElement("a",{href:"mailto:411865@student.nitandhra.ac.in.com"},"Contact Us"))),c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"text-muted"},"An Amazing ",c.a.createElement("span",{className:"text-white"},"MERN")," Bootcamp"))))},d=t(27),u=t.n(d);function p(){return console.log("API IS",l),c.a.createElement(i,{title:"Hola!Admin",description:"Welcome to the XYZ Company"},c.a.createElement("img",{src:u.a,alt:"XYZ company"}))}var E=t(53),h=function(){return c.a.createElement(i,{title:"Welcome to admin area",description:"Manage all of your employees here",className:"container bg-success p-4"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"card"},c.a.createElement("h4",{className:"card-header bg-dark text-white"},"Admin Navigation"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement(o.b,{to:"/create/employee",className:"nav-link text-success"},"Add An Employee")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(o.b,{to:"/manage",className:"nav-link text-success"},"Manage Employees"))))),c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"card mb-4"},c.a.createElement("h4",{className:"card-header"},"Admin!!"),c.a.createElement(E.a,{variant:"success"},c.a.createElement(E.a.Heading,null,"Hey, nice to see you"),c.a.createElement("p",null,"Admin!! You are free to make changes to the Employees of XYZ company"),c.a.createElement("hr",null),c.a.createElement("p",{className:"mb-0"},"Have a smile on your face ;),Thank You."))))))},f=t(12),b=t(2),N=t(13),g=t(22),v=t.n(g),y=t(30);function j(){return(j=Object(y.a)(v.a.mark((function e(a){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,fetch("".concat(l,"/create/employee"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:if((t=e.sent).ok){e.next=7;break}return console.log(t),e.abrupt("return",!1);case 7:return e.next=9,t.json();case 9:return n=e.sent,e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){var e=Object(n.useState)({name:"",designation:"",email:"",phoneNo:"",address:"",photo:"",loading:!1,error:"",createdEmployee:"",getaRedirect:!1,formData:""}),a=Object(N.a)(e,2),t=a[0],r=a[1],l=t.name,s=t.designation,m=t.email,d=t.phoneNo,u=t.address,p=(t.loading,t.error,t.createdEmployee),E=(t.getaRedirect,t.formData);Object(n.useEffect)((function(){r(Object(b.a)(Object(b.a)({},t),{},{formData:new FormData}))}),[]);var h=function(e){e.preventDefault(),console.log(t),r(Object(b.a)(Object(b.a)({},t),{},{error:"",loading:!0})),console.log(E),function(e){return j.apply(this,arguments)}({name:t.name,designation:t.designation,email:t.email,phoneNo:t.phoneNo,address:t.address}).then((function(e){e.error?r(Object(b.a)(Object(b.a)({},t),{},{error:e.error})):r(Object(b.a)(Object(b.a)({},t),{},{name:"",designation:"",email:"",phoneNo:"",address:"",photo:"",loading:!1,createdEmployee:e.name}))}))},g=function(e){return function(a){var n="photo"===e?a.target.files[0]:a.target.value;E.set(e,n),console.log(t),r(Object(b.a)(Object(b.a)({},t),{},Object(f.a)({},e,n)))}};return c.a.createElement(i,{title:"Add a employee here!",description:"Welcome to employee creation section",className:"container bg-info p-4"},c.a.createElement(o.b,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3"},"Admin Home"),c.a.createElement("div",{className:"row bg-dark text-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},c.a.createElement("div",{className:"alert alert-success mt-3",style:{display:p?"":"none"}},c.a.createElement("h4",null,p," created successfully")),c.a.createElement("form",null,c.a.createElement("span",null,"Fill here"),c.a.createElement("br",null),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:g("name"),name:"name",className:"form-control",placeholder:"Name",value:l})),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{onChange:g("designation"),name:"designation",className:"form-control",placeholder:"Designation",value:s})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:g("email"),name:"email",className:"form-control",placeholder:"Email",value:m})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:g("phoneNo"),name:"phoneNo",className:"form-control",placeholder:"phone-no:",value:d})),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{onChange:g("address"),name:"address",className:"form-control",placeholder:"address",value:u})),c.a.createElement("button",{type:"submit",onClick:h,className:"btn btn-outline-success mb-3"},"Create Employee")))))}var x=function(e){var a=e.match,t=Object(n.useState)({name:"",designation:"",email:"",phoneNo:"",address:"",photo:"",loading:!1,error:"",createdEmployee:"",getaRedirect:!1,formData:""}),r=Object(N.a)(t,2),s=r[0],m=r[1],d=s.name,u=s.designation,p=s.email,E=s.phoneNo,h=s.address,g=(s.loading,s.error,s.createdEmployee),v=(s.getaRedirect,s.formData),y=function(e){(function(e){return fetch("".concat(l,"/get/employee/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){e.error?m(Object(b.a)(Object(b.a)({},s),{},{error:e.error})):m(Object(b.a)(Object(b.a)({},s),{},{name:e.name,designation:e.designation,email:e.email,phoneNo:e.phoneNo,address:e.address,formData:new FormData}))}))};Object(n.useEffect)((function(){y(a.params.employeeId)}),[]);var j=function(e){var t,n;e.preventDefault(),m(Object(b.a)(Object(b.a)({},s),{},{error:"",loading:!0})),(t=a.params.employeeId,n=v,fetch("".concat(l,"/update/employee/").concat(t),{method:"PUT",headers:{Accept:"application/json"},body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.error?m(Object(b.a)(Object(b.a)({},s),{},{error:e.error})):m(Object(b.a)(Object(b.a)({},s),{},{name:"",designation:"",email:"",phoneNo:"",address:"",photo:"",loading:!1,createdEmployee:e.name}))}))},O=function(e){return function(a){var t="photo"===e?a.target.files[0]:a.target.value;v.set(e,t),m(Object(b.a)(Object(b.a)({},s),{},Object(f.a)({},e,t)))}};return c.a.createElement(i,{title:"Update an employee here!",description:"Welcome to product creation section",className:"container bg-info p-4"},c.a.createElement(o.b,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3"},"Admin Home"),c.a.createElement("div",{className:"row bg-dark text-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},c.a.createElement("div",{className:"alert alert-success mt-3",style:{display:g?"":"none"}},c.a.createElement("h4",null,g," updated successfully")),c.a.createElement("form",null,c.a.createElement("span",null,"Fill here"),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:O("name"),name:"name",className:"form-control",placeholder:"Name",value:d})),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{onChange:O("designation"),name:"photo",className:"form-control",placeholder:"Designation",value:u})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:O("email"),name:"email",className:"form-control",placeholder:"E-mail",value:p})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:O("phoneNo"),name:"phoneNo",className:"form-control",placeholder:"Phone Number ",value:E})),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{onChange:O("address"),name:"address",className:"form-control",placeholder:"Address",value:h})),c.a.createElement("button",{type:"submit",onClick:j,className:"btn btn-outline-success mb-3"},"Update Employee")))))},k=t(31),w=t.n(k);function A(){return c.a.createElement("div",null,c.a.createElement("h1",null,"About this Project"),c.a.createElement("div",{className:"container",style:{alignItems:"center",paddingTop:100}},c.a.createElement(E.a,{variant:"success"},c.a.createElement(E.a.Heading,null,"Hey, nice to see you"),c.a.createElement("p",null,"This project is a pre-assessment task given by access.ai.Made using MERN STACK. FRONTEND and BACKEND up and Running.API s tested using POSTMAN."),c.a.createElement("hr",null),c.a.createElement("p",{className:"mb-0"},"THANK YOU ;)")),c.a.createElement("img",{src:w.a,alt:"made with MERN",style:{height:800,width:400}})))}function C(){var e=Object(n.useState)([]),a=Object(N.a)(e,2),t=a[0],r=a[1],s=function(){fetch("".concat(l,"/getAll"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?console.log(e.error):r(e)}))};Object(n.useEffect)((function(){s()}),[]);var m=function(e){(function(e){return fetch("".concat(l,"/delete/employee/").concat(e),{method:"DELETE",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){e.error?console.log(e.error):s()}))};return c.a.createElement(i,{title:"Welcome admin",description:"Manage employees here"},c.a.createElement("h2",{className:"mb-4"},"All products:"),c.a.createElement(o.b,{className:"btn btn-info",to:"/admin/dashboard"},c.a.createElement("span",{className:""},"Admin Home")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h2",{className:"text-center text-white my-3"},"Total Employees"),t.map((function(e,a){return c.a.createElement("div",{key:a,className:"row text-center mb-2 "},c.a.createElement("div",{className:"col-4"},c.a.createElement("h3",{className:"text-white text-left"},e.name)),c.a.createElement("div",{className:"col-4"},c.a.createElement(o.b,{className:"btn btn-success",to:"/update/employee/".concat(e._id)},c.a.createElement("span",{className:""},"Update"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("button",{onClick:function(){m(e._id)},className:"btn btn-danger"},"Delete")))})))))}var D=function(){return c.a.createElement(o.a,null,c.a.createElement(r.c,null,c.a.createElement(r.a,{path:"/",exact:!0,component:p}),c.a.createElement(r.a,{path:"/admin/dashboard",exact:!0,component:h}),c.a.createElement(r.a,{path:"/create/employee",exact:!0,component:O}),c.a.createElement(r.a,{path:"/update/employee/:employeeId",exact:!0,component:x}),c.a.createElement(r.a,{path:"/manage",exact:!0,component:C}),c.a.createElement(r.a,{path:"/about",exact:!0,component:A})))},T=t(14);t.n(T).a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.26f859b2.chunk.js.map