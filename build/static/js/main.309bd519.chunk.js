(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var r=a(25),c=a(9),n=a(10),s=a(7),o=a(6),i=a.n(o),l=a(8),u=a(12),j=a(13),d=a(110),b=a(111),p=a(71),h=a(65),O=a(67),x=a(11),m=a(21),f=a.n(m),v=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("https://secure-temple-73769.herokuapp.com/auth/signin",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0.response.data;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH":return t.data;default:return e}},w=function(e){return function(){var t=Object(l.a)(i.a.mark((function t(a){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(e);case 3:(r=t.sent)&&(a({type:"SET_AUTH",data:!0}),localStorage.setItem("cachedUser",JSON.stringify(r))),t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(0),c=t.t0.error,new Error(c);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},y=function(){return function(e){e({type:"SET_AUTH",data:null}),localStorage.removeItem("cachedUser")}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":case"CLEAR_NOTIFICATION":return t.data;default:return e}},T=function(e,t,a){return function(r){r({type:"SET_NOTIFICATION",data:{msg:e,type:t}}),setTimeout((function(){r({type:"CLEAR_NOTIFICATION",data:null})}),1e3*a)}},k=a(49),S=a(0),I=function(e){var t=Object(S.useState)(""),a=Object(k.a)(t,2),r=a[0],c=a[1];return{type:e,value:r,onChange:function(e){c(e.target.value)},reset:function(){c("")}}},P="https://secure-temple-73769.herokuapp.com/api/users",E=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post(P,t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0.response.data;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(i.a.mark((function e(t,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(P,"/").concat(t),{headers:{Authorization:"Bearer ".concat(a)}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0.response.data;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(i.a.mark((function e(t,a,r){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.put("".concat(P,"/").concat(t),r,{headers:{Authorization:"Bearer ".concat(a)}});case 3:return c=e.sent,e.abrupt("return",c.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0.response.data;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,r){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(i.a.mark((function e(t,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.delete("".concat(P,"/").concat(t),{headers:{Authorization:"Bearer ".concat(a)}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0.response.data;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USER":case"UPDATE_USER":return t.data;default:return e}},L=function(){return function(){var e=Object(l.a)(i.a.mark((function e(t){var a,r,c,n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.parse(localStorage.getItem("cachedUser")),r=a.token,c=a.user,e.prev=2,e.next=5,U(c._id,r);case 5:n=e.sent,t({type:"INIT_USER",data:n}),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(2),s=e.t0.error,new Error(s);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(l.a)(i.a.mark((function t(a){var r,c,n,s,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=JSON.parse(localStorage.getItem("cachedUser")),c=r.token,n=r.user._id,t.prev=2,t.next=5,B(n,c,e);case 5:s=t.sent,a({type:"UPDATE_USER",data:s}),t.next=13;break;case 9:throw t.prev=9,t.t0=t.catch(2),o=t.t0.error,new Error(o);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()},D=a(1),F=function(){var e=Object(c.c)((function(e){return e.auth})),t=Object(n.g)(),a=Object(c.b)(),r="reset",o=I("email"),m=o[r],f=Object(u.a)(o,[r].map(j.a)),v=I("password"),g=v[r],N=Object(u.a)(v,[r].map(j.a)),k=function(){var e=Object(l.a)(i.a.mark((function e(r){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),c={email:f.value,password:N.value},e.prev=2,e.next=5,a(w(c));case 5:a(L()),a(T("Welcome back","success",5)),m(),g(),t.push("/home"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),a(T(""+e.t0,"danger",5));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(D.jsxs)(d.a,{sticky:"top",bg:"light",variant:"light",expand:"lg",className:"mb-3",children:[Object(D.jsx)(d.a.Brand,{as:x.c,to:"/",children:Object(D.jsx)("p",{className:"mb-0 h1",children:"\ud83c\udd71\ufe0f"})}),!e&&Object(D.jsx)(b.a.Item,{children:Object(D.jsxs)(p.a,{inline:!0,onSubmit:k,children:[Object(D.jsx)(h.a,Object(s.a)(Object(s.a)({},f),{},{placeholder:"Enter Email",className:"mr-sm-2"})),Object(D.jsx)(h.a,Object(s.a)(Object(s.a)({},N),{},{placeholder:"Password",className:"mr-sm-2"})),Object(D.jsx)(O.a,{type:"submit",variant:"outline-success",children:"Log In"})]})}),Object(D.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(D.jsxs)(d.a.Collapse,{id:"basic-navbar-nav",children:[!e&&Object(D.jsx)(b.a,{className:"ml-auto",children:Object(D.jsx)(b.a.Item,{children:Object(D.jsx)(b.a.Link,{as:x.c,to:"/signup",children:Object(D.jsx)(O.a,{variant:"outline-primary",children:"Sign Up"})})})}),e&&Object(D.jsx)(b.a,{className:"ml-auto",children:Object(D.jsx)(b.a.Item,{children:Object(D.jsx)(O.a,{onClick:function(){a((function(e){e({type:"INIT_USER",data:null})})),a(y()),a(T("Logout Successful, See Ya \ud83d\udc4b","warning",5)),t.push("/")},variant:"outline-danger",children:"Log Out"})})}),e&&Object(D.jsxs)(b.a,{className:"ml-auto",children:[Object(D.jsx)(b.a.Item,{className:"mr-2 p-1",children:Object(D.jsx)(O.a,{as:x.c,to:"/home",variant:"outline-primary",children:"Home"})}),Object(D.jsx)(b.a.Item,{className:"p-1",children:Object(D.jsx)(O.a,{as:x.c,to:"/profile",variant:"outline-primary",children:"Profile"})})]})]})]})},H=function(e){var t=e.component,a=Object(u.a)(e,["component"]),r=Object(c.c)((function(e){return e.auth}));return Object(D.jsx)(n.b,Object(s.a)(Object(s.a)({},a),{},{render:function(e){var a=e.location;return!0===r?Object(D.jsx)(t,{}):Object(D.jsx)(n.a,{to:{pathname:"/login",state:{from:a}}})}}))},G=a(104),J=a(112),R=function(e){var t=e.notification,a=t.msg,r=t.type;return Object(D.jsx)(G.a,{fluid:!0,className:"mb-3",children:Object(D.jsx)(J.a,{className:"mb-0 h3",variant:r,children:a})})},W=function(){return Object(D.jsxs)(G.a,{children:[Object(D.jsx)("hr",{}),Object(D.jsxs)("p",{className:"text-muted text-center",children:["Did you like my work \ud83c\udf89?"," ",Object(D.jsx)("a",{href:"https://github.com/webzth/webzth",target:"_blank",rel:"noreferrer",children:"check out my github"})]})]})},z=a(106),q=a(113),M=a(40),Y=a(105),Z=a(48),K="https://secure-temple-73769.herokuapp.com/api/posts",Q=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get(K,{headers:{Authorization:"Bearer ".concat(t)}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(l.a)(i.a.mark((function e(t,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post(K,t,{headers:{Authorization:"Bearer ".concat(a)}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0.response.data;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),X=function(){var e=Object(l.a)(i.a.mark((function e(t,a,r){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.put("".concat(K,"/").concat(t,"/reactions"),a,{headers:{Authorization:"Bearer ".concat(r)}});case 3:return c=e.sent,e.abrupt("return",c.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0.response.data;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,r){return e.apply(this,arguments)}}(),$=function(){var e=Object(l.a)(i.a.mark((function e(t,a,r){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.put("".concat(K,"/").concat(t,"/comments"),a,{headers:{Authorization:"Bearer ".concat(r)}});case 3:return c=e.sent,console.log(c),e.abrupt("return",c.data);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,r){return e.apply(this,arguments)}}(),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_POSTS":return t.data;case"ADD_POST":return[].concat(Object(Z.a)(e),[t.data]);case"UPDATE_POST":return e.map((function(e){return e.id===t.data.id?t.data:e}));default:return e}},te=function(){return function(){var e=Object(l.a)(i.a.mark((function e(t){var a,r,c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.parse(localStorage.getItem("cachedUser")),r=a.token,e.prev=2,e.next=5,Q(r);case 5:c=e.sent,t({type:"INIT_POSTS",data:c}),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(2),n=e.t0.error,new Error(n);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},ae=function(e){return function(){var t=Object(l.a)(i.a.mark((function t(a){var r,c,n,s,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=JSON.parse(localStorage.getItem("cachedUser")),c=r.token,t.prev=2,t.next=5,V(e,c);case 5:n=t.sent,s=n.returnedPost,a({type:"ADD_POST",data:s}),t.next=14;break;case 10:throw t.prev=10,t.t0=t.catch(2),o=t.t0.error,new Error(o);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},re=function(e,t){return function(){var a=Object(l.a)(i.a.mark((function a(r){var c,n,s,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=JSON.parse(localStorage.getItem("cachedUser")),n=c.token,a.prev=2,a.next=5,X(t,e,n);case 5:s=a.sent,r({type:"UPDATE_POST",data:s}),a.next=13;break;case 9:throw a.prev=9,a.t0=a.catch(2),o=a.t0.error,new Error(o);case 13:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()},ce=function(e,t){return function(){var a=Object(l.a)(i.a.mark((function a(r){var c,n,s,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=JSON.parse(localStorage.getItem("cachedUser")),n=c.token,a.prev=2,a.next=5,$(t,e,n);case 5:s=a.sent,r({type:"UPDATE_POST",data:s}),a.next=13;break;case 9:throw a.prev=9,a.t0=a.catch(2),o=a.t0.error,new Error(o);case 13:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()},ne={thumbsUp:"\ud83d\udc4d",hooray:"\ud83d\ude4c",heart:"\u2764\ufe0f",rocket:"\ud83d\ude80",eyes:"\ud83d\udc40"},se=function(e){var t=e.reactions,a=e.post,r=Object(c.b)(),n=function(){var e=Object(l.a)(i.a.mark((function e(c,n){var o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.id,l=Object(s.a)(Object(s.a)({},t),{},Object(M.a)({},n,t[n]+1)),e.prev=2,e.next=5,r(re({reactions:l},o));case 5:r(T('Liked post "'.concat(a.postTitle,'" by ').concat(a.postAuthor||"anonymous"),"success",5)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,a){return e.apply(this,arguments)}}(),o=Object.entries(ne).map((function(e){var r=Object(k.a)(e,2),c=r[0],s=r[1];return Object(D.jsxs)(O.a,{variant:"dark",className:"mt-2",onClick:function(e){return n(a,c)},children:[s,Object(D.jsx)(Y.a,{variant:"success",children:t[c]})]},c)}));return Object(D.jsx)("div",{children:o})},oe=function(e){var t=e.post,a=Object(c.b)(),r="reset",n=I("text"),o=n[r],d=Object(u.a)(n,[r].map(j.a)),b=function(){var e=Object(l.a)(i.a.mark((function e(r){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),c=t.id,n=[].concat(Object(Z.a)(t.comments),[{content:d.value,date:Date.now()}]),e.prev=3,e.next=6,a(ce({comments:n},c));case 6:a(T("Commented on ".concat(t.user.username,"'s blog \ud83d\ude4c"),"success",5)),o(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),a(T(""+e.t0,"danger",5)),o();case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(D.jsxs)(p.a,{inline:!0,onSubmit:b,children:[Object(D.jsx)(h.a,Object(s.a)(Object(s.a)({},d),{},{placeholder:"drop a comment...",className:"mr-sm-2"})),Object(D.jsx)(O.a,{type:"submit",variant:"outline-success",children:"Comment"})]})},ie=function(e){var t=e.post;return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("ul",{children:t.comments.map((function(e){return Object(D.jsx)("li",{children:e.content},e.date)}))})})},le=function(e){var t=e.post;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("p",{className:"text-primary",children:"Leave a comment"}),t.comments.length&&Object(D.jsx)(ie,{post:t})||Object(D.jsx)("p",{className:"text-muted",children:"Be the first to comment on this post \ud83d\ude0e"}),Object(D.jsx)(oe,{post:t})]})},ue=function(){var e=Object(c.b)(),t=Object(n.i)().id,a=Object(c.c)((function(e){return e.posts}));if(Object(S.useEffect)((function(){e(te())}),[e]),a.length){var r=a.find((function(e){return e.id===t}));return Object(D.jsxs)(G.a,{children:[Object(D.jsx)(O.a,{className:"mb-3",variant:"outline-primary",as:x.b,to:"/home",children:"\u2b05\ufe0f Back"}),Object(D.jsx)(z.a,{className:"p-1",children:Object(D.jsxs)(q.a,{bg:"dark",text:"light",children:[Object(D.jsxs)(q.a.Body,{children:[Object(D.jsx)(q.a.Title,{children:r.postTitle}),Object(D.jsxs)(q.a.Subtitle,{className:"mb-3 text-muted",children:["~ posted by ",r.postAuthor||"\ud83d\udc7b"," on ",r.created_at]}),Object(D.jsx)(q.a.Text,{children:r.postContent}),Object(D.jsx)(se,{reactions:r.reactions,post:r}),Object(D.jsxs)(q.a.Text,{className:"text-muted",children:["updated last at ",r.updated_at||null]})]}),Object(D.jsx)(q.a.Footer,{children:Object(D.jsx)(le,{post:r})})]})})]})}return null},je=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.auth}));return Object(S.useEffect)((function(){if(localStorage.getItem("cachedUser")){var t=JSON.parse(localStorage.getItem("cachedUser")).user;e((function(e){e({type:"SET_AUTH",data:!0})})),e(L()),e(T("Welcome back ".concat(t.name),"success",5))}}),[e]),Object(D.jsx)(G.a,{children:Object(D.jsxs)(z.a,{children:[Object(D.jsx)("h1",{children:"Welcome to \ud83c\udd71\ufe0flogger"}),Object(D.jsx)("hr",{}),Object(D.jsxs)("p",{children:["This is a fullstack blog application, written in modern javascript using modern work-flows like redux, redux-thunk and react-bootstrap. This React front-end is communicating with a back-end node application written in Express. Check out my source-code"," ",Object(D.jsx)("a",{href:"https://github.com/WebZth/BLOGAPP-MERN",target:"_blank",rel:"noreferrer",children:"here"}),"."]}),Object(D.jsx)("br",{}),!t&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("p",{children:Object(D.jsx)(O.a,{as:x.c,to:"/signup",variant:"outline-primary",children:"Sign Up"})}),Object(D.jsxs)("p",{className:"text-muted",children:["Already have an account? ",Object(D.jsx)(x.c,{to:"/login",children:"Log In"})]})]}),t&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("p",{children:Object(D.jsx)(O.a,{as:x.c,to:"/home",variant:"success",children:"Home"})}),Object(D.jsx)("p",{className:"text-muted",children:"You are already signed in"})]})]})})},de=a(107),be=function(){var e=Object(c.b)(),t=Object(n.h)().state,a=Object(n.g)();Object(S.useEffect)((function(){if(localStorage.getItem("cachedUser")){var r=JSON.parse(localStorage.getItem("cachedUser")).user;e((function(e){e({type:"SET_AUTH",data:!0})})),e(T("Welcome back ".concat(r.name),"success",5)),e(L()),a.push("".concat((null===t||void 0===t?void 0:t.from.pathname)||"/home"))}}),[e,a,null===t||void 0===t?void 0:t.from.pathname]);var r="reset",o=I("email"),d=o[r],b=Object(u.a)(o,[r].map(j.a)),m=I("password"),f=m[r],v=Object(u.a)(m,[r].map(j.a)),g=function(){var r=Object(l.a)(i.a.mark((function r(c){var n;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),n={email:b.value,password:v.value},r.prev=2,r.next=5,e(w(n));case 5:d(),f(),e(L()),e(T("Welcome back","success",5)),a.push("".concat((null===t||void 0===t?void 0:t.from.pathname)||"/home")),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(2),e(T(""+r.t0,"danger",5));case 14:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(e){return r.apply(this,arguments)}}();return Object(D.jsx)(G.a,{children:Object(D.jsx)(z.a,{children:Object(D.jsxs)(q.a,{children:[Object(D.jsx)(q.a.Header,{className:"mb-0 h2",children:"Login to your account"}),Object(D.jsx)(q.a.Body,{children:Object(D.jsxs)(p.a,{onSubmit:g,children:[Object(D.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(D.jsx)(p.a.Label,{srOnly:!0,children:"Email"}),Object(D.jsxs)(de.a,{className:"mb-2",children:[Object(D.jsx)(de.a.Prepend,{children:Object(D.jsx)(de.a.Text,{children:"Email"})}),Object(D.jsx)(h.a,Object(s.a)(Object(s.a)({},b),{},{placeholder:"Email",required:!0}))]}),Object(D.jsx)(p.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(D.jsxs)(p.a.Group,{controlId:"formBasicPassword",children:[Object(D.jsx)(p.a.Label,{srOnly:!0,children:"Password"}),Object(D.jsxs)(de.a,{className:"mb-2",children:[Object(D.jsx)(de.a.Prepend,{children:Object(D.jsx)(de.a.Text,{children:"Password"})}),Object(D.jsx)(h.a,Object(s.a)(Object(s.a)({},v),{},{placeholder:"Password",required:!0}))]}),Object(D.jsx)(p.a.Text,{className:"text-muted",children:"Please include special characters, numbers and capital letters."})]}),Object(D.jsx)(O.a,{variant:"success",type:"submit",children:"Log In"}),Object(D.jsxs)(p.a.Text,{className:"text-muted",children:["Don't have an account? ",Object(D.jsx)(x.c,{to:"/signup",children:"Sign Up"})]})]})})]})})})},pe=a(108),he=a(66),Oe=function(){var e=Object(n.g)(),t=Object(c.b)();Object(S.useEffect)((function(){if(localStorage.getItem("cachedUser")){var a=JSON.parse(localStorage.getItem("cachedUser")).user;t((function(e){e({type:"SET_AUTH",data:!0})})),t(T("Welcome back ".concat(a.name),"success",5)),t(L()),e.push("/")}}),[t,e]);var a="reset",r=I("email"),o=r[a],d=Object(u.a)(r,[a].map(j.a)),b=I("password"),m=b[a],f=Object(u.a)(b,[a].map(j.a)),v=I("text"),g=v[a],w=Object(u.a)(v,[a].map(j.a)),y=I("text"),N=y[a],k=Object(u.a)(y,[a].map(j.a)),P=function(){var a=Object(l.a)(i.a.mark((function a(r){var c,n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),c={email:d.value,password:f.value,username:w.value,name:k.value},a.prev=2,a.next=5,E(c);case 5:o(),m(),N(),g(),t(T("Sign Up successful, login to continue","success",5)),e.push("/login"),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(2),n=a.t0.error,t(T(""+n,"danger",5));case 14:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}();return Object(D.jsx)(G.a,{children:Object(D.jsx)(z.a,{children:Object(D.jsxs)(q.a,{children:[Object(D.jsx)(q.a.Header,{className:"mb-0 h2",children:"Create an account"}),Object(D.jsx)(q.a.Body,{children:Object(D.jsxs)(p.a,{onSubmit:P,children:[Object(D.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(D.jsx)(p.a.Label,{srOnly:!0,children:"Email"}),Object(D.jsxs)(de.a,{className:"mb-2",children:[Object(D.jsx)(de.a.Prepend,{children:Object(D.jsx)(de.a.Text,{children:"Email"})}),Object(D.jsx)(h.a,Object(s.a)(Object(s.a)({},d),{},{placeholder:"Email",required:!0}))]}),Object(D.jsx)(p.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(D.jsxs)(p.a.Group,{controlId:"formBasicPassword",children:[Object(D.jsx)(p.a.Label,{srOnly:!0,children:"Password"}),Object(D.jsxs)(de.a,{className:"mb-2",children:[Object(D.jsx)(de.a.Prepend,{children:Object(D.jsx)(de.a.Text,{children:"Password"})}),Object(D.jsx)(h.a,Object(s.a)(Object(s.a)({},f),{},{placeholder:"Password",required:!0}))]}),Object(D.jsx)(p.a.Text,{className:"text-muted",children:"Please include special characters, numbers and capital letters."})]}),Object(D.jsxs)(pe.a,{children:[Object(D.jsx)(he.a,{children:Object(D.jsxs)(p.a.Group,{controlId:"formBasicName",children:[Object(D.jsx)(p.a.Label,{srOnly:!0,children:"Name"}),Object(D.jsxs)(de.a,{className:"mb-2",children:[Object(D.jsx)(de.a.Prepend,{children:Object(D.jsx)(de.a.Text,{children:"Name"})}),Object(D.jsx)(h.a,Object(s.a)(Object(s.a)({},k),{},{placeholder:"Full Name",required:!0}))]}),Object(D.jsx)(p.a.Text,{className:"text-muted",children:"Please provide your full name."})]})}),Object(D.jsx)(he.a,{children:Object(D.jsxs)(p.a.Group,{controlId:"formBasicUsername",children:[Object(D.jsx)(p.a.Label,{srOnly:!0,children:"Username"}),Object(D.jsxs)(de.a,{className:"mb-2",children:[Object(D.jsx)(de.a.Prepend,{children:Object(D.jsx)(de.a.Text,{children:"@"})}),Object(D.jsx)(h.a,Object(s.a)(Object(s.a)({},w),{},{placeholder:"Username",required:!0}))]}),Object(D.jsx)(p.a.Text,{className:"text-muted",children:"Please provide a username."})]})})]}),Object(D.jsx)(O.a,{variant:"primary",type:"submit",children:"Sign Up"}),Object(D.jsxs)(p.a.Text,{className:"text-muted",children:["Already have an account? ",Object(D.jsx)(x.c,{to:"/login",children:"Log In"})]})]})})]})})})},xe=a(109),me=a(68),fe=function(e){var t=e.post,a=t.postTitle,r=t.postAuthor,c=t.created_at,n=t.postContent,s=t.reactions,o=t.comments,i=t.id;return Object(D.jsx)(z.a,{className:"p-0 mb-2",children:Object(D.jsx)(q.a,{bg:"dark",text:"light",children:Object(D.jsxs)(q.a.Body,{children:[Object(D.jsx)(q.a.Title,{children:a}),Object(D.jsxs)(q.a.Subtitle,{className:"mb-2 text-muted",children:["~ ",r||"\ud83d\udc7b"," on ",c]}),Object(D.jsxs)(q.a.Text,{children:[n.slice(0,15),"..."," ",Object(D.jsx)(O.a,{variant:"outline-info",as:x.b,to:"/posts/".concat(i),children:"Read More"})]}),Object(D.jsxs)(q.a.Text,{className:"text-muted",children:[o.length," comments"]}),Object(D.jsx)(se,{reactions:s,post:t})]})})})},ve=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.posts}));return Object(S.useEffect)((function(){e(te())}),[e]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h3",{className:"mb-3",children:"Blog Feed"}),Object(D.jsx)(z.a,{className:"p-2",style:{maxHeight:"100vh",overflow:"auto"},children:t.length&&t.map((function(e){return Object(D.jsx)(fe,{post:e},e.id)}))})]})},ge=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.user})),a="reset",r=I("text"),n=r[a],o=Object(u.a)(r,[a].map(j.a)),d=I("text"),b=d[a],m=Object(u.a)(d,[a].map(j.a)),f=function(){var a=Object(l.a)(i.a.mark((function a(r){var c;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),c={postTitle:o.value,postContent:m.value,postAuthor:t.username},a.prev=2,a.next=5,e(ae(c));case 5:t.posts.length++,n(),b(),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),e(T(""+a.t0,"danger",5));case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}();return Object(D.jsx)(G.a,{children:t&&Object(D.jsxs)(pe.a,{children:[Object(D.jsx)(he.a,{xs:12,sm:12,md:4,className:"xs-sm mb-3",children:Object(D.jsxs)(q.a,{children:[Object(D.jsx)(q.a.Header,{children:"\ud83d\udd10 My Profile"}),Object(D.jsxs)(q.a.Body,{children:[Object(D.jsx)(q.a.Title,{children:t.name}),Object(D.jsxs)(q.a.Text,{className:"text-muted",children:[t.name," joined \ud83c\udd71\ufe0flogger on ",t.created_at]})]}),Object(D.jsxs)(xe.a,{className:"list-group-flush",children:[Object(D.jsxs)(me.a,{children:["\ud83c\udf89 ",t.posts.length," posts shared"]}),Object(D.jsxs)(me.a,{children:["\ud83d\udcec ",t.email]}),Object(D.jsxs)(me.a,{children:["\ud83d\udde3\ufe0f ",t.updated_at||"no updates"]})]}),Object(D.jsx)(q.a.Body,{children:Object(D.jsx)(q.a.Link,{as:x.c,to:"/profile",children:"\u2699\ufe0f Settings"})})]})}),Object(D.jsxs)(he.a,{md:8,children:[Object(D.jsx)(z.a,{className:"p-2",children:Object(D.jsxs)(q.a,{children:[Object(D.jsx)(q.a.Header,{className:"mb-0 h4",children:"Create Blog"}),Object(D.jsx)(q.a.Body,{children:Object(D.jsxs)(p.a,{onSubmit:f,children:[Object(D.jsxs)(p.a.Group,{controlId:"formBasicTitle",children:[Object(D.jsx)(p.a.Label,{srOnly:!0,children:"Title"}),Object(D.jsxs)(de.a,{className:"mb-2",children:[Object(D.jsx)(de.a.Prepend,{children:Object(D.jsx)(de.a.Text,{children:"Title"})}),Object(D.jsx)(h.a,Object(s.a)(Object(s.a)({},o),{},{placeholder:"Blog Title",required:!0}))]})]}),Object(D.jsxs)(p.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(D.jsx)(p.a.Control,Object(s.a)(Object(s.a)({},m),{},{placeholder:"What's on your mind...",as:"textarea",rows:2})),Object(D.jsx)(p.a.Text,{className:"text-muted",children:"Please refrain from profanity and keep other people's feelings in mind when sharing posts."})]}),Object(D.jsx)(O.a,{variant:"success",type:"submit",children:"\ud83c\udd71\ufe0flog"})]})})]})}),Object(D.jsx)("hr",{}),Object(D.jsx)(ve,{})]})]})})},we=function(){var e=Object(c.c)((function(e){return e.user})),t=Object(c.b)(),a=Object(n.g)(),r="reset",o=I("password"),d=o[r],b=Object(u.a)(o,[r].map(j.a)),m=I("email"),f=m[r],v=Object(u.a)(m,[r].map(j.a)),g=I("text"),w=g[r],N=Object(u.a)(g,[r].map(j.a)),k=I("text"),S=k[r],P=Object(u.a)(k,[r].map(j.a)),E=function(){f(),d(),w(),S()},U=function(){var e=Object(l.a)(i.a.mark((function e(r){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),c=Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({},b.value&&{password:b.value}),v.value&&{email:v.value}),N.value&&{name:N.value}),P.value&&{username:P.value}),e.prev=2,c.password||c.email){e.next=9;break}return e.next=6,t(C(c));case 6:E(),e.next=16;break;case 9:return e.next=11,t(C(c));case 11:E(),t((function(e){e({type:"INIT_USER",data:null})})),t(y()),t(T("Please Login again, password/email changed ","primary",5)),a.push("/");case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(2),n=e.t0.error,t(T(""+n,"danger",5));case 22:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(i.a.mark((function e(){var r,c,n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=JSON.parse(localStorage.getItem("cachedUser")),c=r.token,n=r.user._id,e.prev=2,!window.confirm("Delete your profile?")){e.next=10;break}return e.next=6,_(n,c);case 6:t((function(e){e({type:"INIT_USER",data:null})})),t(y()),t(T("Profile Deleted successfully","warning",5)),a.push("/");case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),s=e.t0.error,t(T(""+s,"danger",5));case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return Object(D.jsx)(G.a,{children:e&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(z.a,{className:"p-2",children:Object(D.jsxs)(q.a,{text:"dark",children:[Object(D.jsx)(q.a.Header,{className:"mb-0 h2",children:"Update Profile Information"}),Object(D.jsx)(q.a.Body,{children:Object(D.jsxs)(p.a,{onSubmit:U,children:[Object(D.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(D.jsx)(p.a.Label,{srOnly:!0,children:"Email"}),Object(D.jsxs)(de.a,{className:"mb-2",children:[Object(D.jsx)(de.a.Prepend,{children:Object(D.jsx)(de.a.Text,{children:"Email"})}),Object(D.jsx)(h.a,Object(s.a)(Object(s.a)({},v),{},{placeholder:"Email"}))]}),Object(D.jsx)(p.a.Text,{className:"text-muted",children:"Please provide a valid email."})]}),Object(D.jsxs)(p.a.Group,{controlId:"formBasicPassword",children:[Object(D.jsx)(p.a.Label,{srOnly:!0,children:"Password"}),Object(D.jsxs)(de.a,{className:"mb-2",children:[Object(D.jsx)(de.a.Prepend,{children:Object(D.jsx)(de.a.Text,{children:"Password"})}),Object(D.jsx)(h.a,Object(s.a)(Object(s.a)({},b),{},{placeholder:"Password"}))]}),Object(D.jsx)(p.a.Text,{className:"text-muted",children:"Please include special characters, numbers and capital letters."})]}),Object(D.jsxs)(pe.a,{children:[Object(D.jsx)(he.a,{children:Object(D.jsxs)(p.a.Group,{controlId:"formBasicName",children:[Object(D.jsx)(p.a.Label,{srOnly:!0,children:"Name"}),Object(D.jsxs)(de.a,{className:"mb-2",children:[Object(D.jsx)(de.a.Prepend,{children:Object(D.jsx)(de.a.Text,{children:"Name"})}),Object(D.jsx)(h.a,Object(s.a)(Object(s.a)({},N),{},{placeholder:"Full Name"}))]}),Object(D.jsx)(p.a.Text,{className:"text-muted",children:"Please provide your full name."})]})}),Object(D.jsx)(he.a,{children:Object(D.jsxs)(p.a.Group,{controlId:"formBasicUsername",children:[Object(D.jsx)(p.a.Label,{srOnly:!0,children:"Username"}),Object(D.jsxs)(de.a,{className:"mb-2",children:[Object(D.jsx)(de.a.Prepend,{children:Object(D.jsx)(de.a.Text,{children:"@"})}),Object(D.jsx)(h.a,Object(s.a)(Object(s.a)({},P),{},{placeholder:"Username"}))]}),Object(D.jsx)(p.a.Text,{className:"text-muted",children:"Please provide a username."})]})})]}),Object(D.jsx)(O.a,{variant:"success",type:"submit",children:"\u2699\ufe0f Update"}),Object(D.jsxs)(p.a.Text,{className:"text-muted",children:["Cancel Update ",Object(D.jsx)(x.c,{to:"/home",children:"Go Back"})]})]})}),Object(D.jsx)(q.a.Footer,{children:Object(D.jsx)(O.a,{variant:"outline-danger",onClick:B,children:"Delete Profile"})})]})}),Object(D.jsx)("hr",{}),Object(D.jsx)("h3",{children:"My Posts"}),Object(D.jsx)(z.a,{className:"p-2",style:{maxHeight:"80vh",overflow:"auto"},children:e.posts.length&&e.posts.map((function(e){return Object(D.jsx)(fe,{post:e},e.id)}))||Object(D.jsx)("p",{children:"No posts yet! \ud83d\udc7b"})})]})})},ye=function(){var e=Object(c.c)((function(e){return e.notification}));return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(F,{}),e&&Object(D.jsx)(R,{notification:e}),Object(D.jsxs)(n.d,{children:[Object(D.jsx)(n.b,{exact:!0,path:"/",component:je}),Object(D.jsx)(n.b,{path:"/login",component:be}),Object(D.jsx)(n.b,{path:"/signup",component:Oe}),Object(D.jsx)(H,{path:"/home",component:ge}),Object(D.jsx)(H,{path:"/profile",component:we}),Object(D.jsx)(H,{path:"/posts/:id",component:ue})]}),Object(D.jsx)(W,{})]})};var Ne=function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(ye,{})})},Te=a(36),ke=a(69),Se=a(70),Ie=Object(Te.combineReducers)({auth:g,user:A,posts:ee,notification:N}),Pe=Object(Te.createStore)(Ie,Object(ke.composeWithDevTools)(Object(Te.applyMiddleware)(Se.a)));Object(r.render)(Object(D.jsx)(x.a,{children:Object(D.jsx)(c.a,{store:Pe,children:Object(D.jsx)(Ne,{})})}),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.309bd519.chunk.js.map