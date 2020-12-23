(this["webpackJsonpcv-app"]=this["webpackJsonpcv-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),r=n.n(i),s=n(11),c=n.n(s),l=(n(18),n(3)),d=n(4),o=n(7),u=n(6),h=(n(19),function(){return Object(a.jsx)("h1",{className:"header",children:"Build you own CV"})}),m=n(5),j=n(10),b=n(2),f=function(e){var t=e.info,n=t.name,i=t.surname,r=t.phone,s=t.email;return Object(a.jsxs)("div",{className:"generalInfoDiv",children:[Object(a.jsx)("div",{className:"generalInfo",id:"nameLabel",children:"Name:"}),Object(a.jsx)("div",{className:"generalInfo",id:"nameData",children:n}),Object(a.jsx)("div",{className:"generalInfo",id:"surnameLabel",children:"Surname:"}),Object(a.jsx)("div",{className:"generalInfo",id:"surnameData",children:i}),Object(a.jsx)("div",{className:"generalInfo",id:"phoneLabel",children:"Phone:"}),Object(a.jsx)("div",{className:"generalInfo",id:"phoneData",children:r}),Object(a.jsx)("div",{className:"generalInfo",id:"emailLabel",children:"E-mail:"}),Object(a.jsx)("div",{className:"generalInfo",id:"emailData",children:s})]})},v=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={generalInfo:{name:"",surname:"",phone:"",email:""},formSubmitted:!1},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleEdit=a.handleEdit.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.value,a=t.name;this.setState({generalInfo:Object(j.a)(Object(j.a)({},this.state.generalInfo),{},Object(m.a)({},a,n))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({formSubmitted:!0}),console.log(this.state)}},{key:"handleEdit",value:function(e){this.setState({formSubmitted:!1})}},{key:"render",value:function(){var e=this.state.generalInfo,t=e.name,n=e.surname,i=e.phone,r=e.email;return Object(a.jsxs)("div",{className:"generalSection",children:[Object(a.jsx)("h2",{className:"generalFormHeader",children:"General information"}),this.state.formSubmitted?Object(a.jsxs)("div",{className:"generalInfoContainer",children:[Object(a.jsx)(f,{info:this.state.generalInfo}),Object(a.jsx)("div",{className:"buttonDiv",children:Object(a.jsx)("button",{type:"button",onClick:this.handleEdit,children:"Edit"})})]}):Object(a.jsx)("div",{className:"formDiv",children:Object(a.jsxs)("form",{id:"generalFOrm",onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange,id:"nameInput",className:"formInput",placeholder:"Enter your name",required:!0}),Object(a.jsx)("input",{type:"text",name:"surname",value:n,onChange:this.handleChange,id:"surnameInput",className:"formInput",placeholder:"Enter your surname",required:!0}),Object(a.jsx)("input",{type:"text",name:"phone",value:i,onChange:this.handleChange,id:"phoneInput",className:"formInput",placeholder:"Enter your phone number",required:!0}),Object(a.jsx)("input",{type:"text",name:"email",value:r,onChange:this.handleChange,id:"emailInput",className:"formInput",placeholder:"Enter your e-mail",required:!0}),Object(a.jsx)("div",{className:"buttonDiv",children:Object(a.jsx)("input",{type:"submit",value:"Submit"})})]})})]})}}]),n}(i.Component),O=n(22),p=function(e){function t(e){var t=e.split("-");return Object(O.a)(new Date(t[0],t[1]-1,t[2]),"PP")}var n=e.info,i=n.startDate,r=n.endDate,s=n.school,c=n.title,l=t(i),d=t(r);return Object(a.jsxs)("div",{className:"eduItem",children:[Object(a.jsxs)("div",{className:"eduInfo",id:"dates",children:[l," - ",d]}),Object(a.jsx)("div",{className:"eduInfo",id:"schoolLabel",children:"School:"}),Object(a.jsx)("div",{className:"eduInfo",id:"schoolData",children:s}),Object(a.jsx)("div",{className:"eduInfo",id:"titleLabel",children:"Title:"}),Object(a.jsx)("div",{className:"eduInfo",id:"titleData",children:c}),Object(a.jsxs)("div",{className:"buttonsDiv",children:[Object(a.jsx)("button",{id:"eduDelBtn",onClick:e.onDelete,children:"Delete"}),Object(a.jsx)("button",{id:"eduEditBtn",onClick:e.onEdit,children:"Edit"})]})]})},x=function(e){var t=e.info,n=t.school,i=t.title,r=t.startDate,s=t.endDate;return Object(a.jsx)("div",{className:"formDiv",children:Object(a.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(a.jsx)("input",{type:"text",name:"school",value:n,className:"formInput",onChange:e.onChange,placeholder:"Enter the school name",required:!0}),Object(a.jsx)("input",{type:"text",name:"title",value:i,className:"formInput",onChange:e.onChange,placeholder:"Enter the title of study",required:!0}),Object(a.jsx)("input",{type:"date",name:"startDate",value:r,className:"formInput",onChange:e.onChange,placeholder:"Enter the start date",required:!0}),Object(a.jsx)("input",{type:"date",name:"endDate",value:s,className:"formInput",onChange:e.onChange,placeholder:"Enter the finish date",required:!0}),Object(a.jsx)("input",{type:"submit",value:"Submit"})]})})},D=n(8),I=n.n(D),g=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={formActive:!1,educationList:[],currentId:"",startDate:"",endDate:"",school:"",title:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.renderForm=a.renderForm.bind(Object(b.a)(a)),a.handleDelete=a.handleDelete.bind(Object(b.a)(a)),a.handleEdit=a.handleEdit.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"renderForm",value:function(e){this.setState({formActive:!0})}},{key:"handleChange",value:function(e){var t=e.target,n=t.value,a=t.name;this.setState(Object(m.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=[{currentId:I()(),startDate:this.state.startDate,endDate:this.state.endDate,school:this.state.school,title:this.state.title}];this.setState({formActive:!1,educationList:this.state.educationList.concat(t).sort((function(e,t){return new Date(t.endDate)-new Date(e.endDate)})),currentId:"",startDate:"",endDate:"",school:"",title:""})}},{key:"handleDelete",value:function(e){var t=this.state.educationList.filter((function(t){return t.currentId!==e}));this.setState({educationList:t})}},{key:"handleEdit",value:function(e){var t=this.state.educationList.find((function(t){return t.currentId===e}));this.setState({formActive:!0,currentId:t.currentId,startDate:t.startDate,endDate:t.endDate,school:t.school,title:t.title}),this.handleDelete(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.formActive,i=t.educationList;return Object(a.jsxs)("div",{className:"educationSection",children:[Object(a.jsx)("h2",{className:"educationHeader",children:"Education"}),Object(a.jsx)("div",{className:"addBtnDiv",children:Object(a.jsx)("button",{onClick:this.renderForm,children:"Add School"})}),n&&Object(a.jsx)(x,{info:this.state,onSubmit:this.handleSubmit,onChange:this.handleChange}),i.map((function(t){return Object(a.jsx)(p,{info:t,onDelete:function(){return e.handleDelete(t.currentId)},onEdit:function(){return e.handleEdit(t.currentId)}},t.currentId)}))]})}}]),n}(i.Component),k=function(e){var t=e.info,n=t.employer,i=t.title,r=t.tasks,s=t.startDate,c=t.endDate;return Object(a.jsx)("div",{className:"formDiv",children:Object(a.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(a.jsx)("input",{type:"text",name:"employer",value:n,className:"formInput",onChange:e.onChange,placeholder:"Enter the employer name",required:!0}),Object(a.jsx)("input",{type:"text",name:"title",value:i,className:"formInput",onChange:e.onChange,placeholder:"Enter the position title",required:!0}),Object(a.jsx)("input",{type:"date",name:"startDate",value:s,className:"formInput",onChange:e.onChange,placeholder:"Enter the start date",required:!0}),Object(a.jsx)("input",{type:"date",name:"endDate",value:c,className:"formInput",onChange:e.onChange,placeholder:"Enter the finish date",required:!0}),Object(a.jsx)("textarea",{rows:"3",cols:"29",name:"tasks",value:r,className:"formTextArea",onChange:e.onChange,placeholder:"Describe your tasks",required:!0}),Object(a.jsx)("input",{type:"submit",value:"Submit"})]})})},N=function(e){function t(e){var t=e.split("-");return Object(O.a)(new Date(t[0],t[1]-1,t[2]),"PP")}var n=e.info,i=n.startDate,r=n.endDate,s=n.employer,c=n.title,l=n.tasks,d=t(i),o=t(r);return Object(a.jsxs)("div",{className:"workItem",children:[Object(a.jsxs)("div",{className:"workInfo",id:"dates",children:[d," - ",o]}),Object(a.jsx)("div",{className:"workInfo",id:"employerLabel",children:"Employer:"}),Object(a.jsx)("div",{className:"workInfo",id:"employerData",children:s}),Object(a.jsx)("div",{className:"workInfo",id:"titleLabel",children:"Title:"}),Object(a.jsx)("div",{className:"workInfo",id:"titleData",children:c}),Object(a.jsx)("div",{className:"workInfo",id:"tasksLabel",children:"Tasks:"}),Object(a.jsx)("div",{className:"workInfo",id:"tasksData",children:l}),Object(a.jsxs)("div",{className:"buttonsDiv",children:[Object(a.jsx)("button",{id:"workDelBtn",onClick:e.onDelete,children:"Delete"}),Object(a.jsx)("button",{id:"workEditBtn",onClick:e.onEdit,children:"Edit"})]})]})},y=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={formActive:!1,workList:[],currentId:"",startDate:"",endDate:"",employer:"",title:"",tasks:""},a.renderForm=a.renderForm.bind(Object(b.a)(a)),a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleDelete=a.handleDelete.bind(Object(b.a)(a)),a.handleEdit=a.handleEdit.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"renderForm",value:function(e){this.setState({formActive:!0})}},{key:"handleChange",value:function(e){var t=e.target,n=t.value,a=t.name;this.setState(Object(m.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=[{currentId:I()(),startDate:this.state.startDate,endDate:this.state.endDate,employer:this.state.employer,title:this.state.title,tasks:this.state.tasks}];this.setState({formActive:!1,workList:this.state.workList.concat(t).sort((function(e,t){return new Date(t.endDate)-new Date(e.endDate)})),currentId:"",startDate:"",endDate:"",employer:"",title:"",tasks:""})}},{key:"handleDelete",value:function(e){var t=this.state.workList.filter((function(t){return t.currentId!==e}));this.setState({workList:t})}},{key:"handleEdit",value:function(e){var t=this.state.workList.find((function(t){return t.currentId===e}));this.setState({formActive:!0,currentId:t.currentId,startDate:t.startDate,endDate:t.endDate,employer:t.employer,title:t.title,tasks:t.tasks}),this.handleDelete(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.formActive,i=t.workList;return Object(a.jsxs)("div",{className:"workSection",children:[Object(a.jsx)("h2",{children:"Work Experience"}),Object(a.jsx)("div",{className:"addBtnDiv",children:Object(a.jsx)("button",{onClick:this.renderForm,children:"Add Work Experience"})}),n&&Object(a.jsx)(k,{info:this.state,onChange:this.handleChange,onSubmit:this.handleSubmit}),i.map((function(t){return Object(a.jsx)(N,{info:t,onDelete:function(){return e.handleDelete(t.currentId)},onEdit:function(){return e.handleEdit(t.currentId)}},t.currentId)}))]})}}]),n}(i.Component),C=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.call(this)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"appContainer",children:[Object(a.jsx)(h,{}),Object(a.jsx)(v,{}),Object(a.jsxs)("div",{className:"contentSection",children:[Object(a.jsx)(g,{}),Object(a.jsx)(y,{})]})]})}}]),n}(i.Component);c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.d8467c2d.chunk.js.map