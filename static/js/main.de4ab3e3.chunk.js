(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={Container:"Header_Container__1UleV",Navlink:"Header_Navlink__1-rVO",Menu:"Header_Menu__2i1zW",Hidden:"Header_Hidden__1cdI7",active:"Header_active__1shXv"}},,,,,,function(e,t,n){e.exports={bubble_container:"Message_bubble_container__1yJj1",bubble:"Message_bubble__1b86x",time:"Message_time__1uLtp"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__15U20",errorInput:"SuperInputText_errorInput__1F-8H",error:"SuperInputText_error__RZW9v"}},,,function(e,t,n){e.exports={default:"SuperButton_default__2Cbdb",red:"SuperButton_red__D5mXi",disable:"SuperButton_disable__e5nTl"}},function(e,t,n){e.exports={blue:"HW4_blue__mZCA6",column:"HW4_column__2p9RV",testSpanError:"HW4_testSpanError__23Vip"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__ppMcR",spanClassName:"SuperCheckbox_spanClassName__3FQOO"}},,,,,,,function(e,t,n){e.exports={App:"App_App__1KwNM"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__3yhLf",error:"Greeting_error__3Zkgt"}},,function(e,t,n){e.exports={SuperEditableSpan:"SuperEditableSpan_SuperEditableSpan__2n0w-"}},function(e,t,n){e.exports={img:"Error404_img__3H1MZ"}},function(e,t,n){e.exports={select:"SuperSelect_select__2N1XN","select-css":"SuperSelect_select-css__3PPCC"}},function(e,t,n){e.exports={item:"HW8_item__Iu_pQ"}},,,,,,,function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(26),s=n.n(a),i=(n(40),n(27)),o=n.n(i),j=n(9),l=n(3),u=n(2),b=n(14),d=n.n(b),O=n(0);var h=function(e){return Object(O.jsxs)("div",{className:d.a.bubble_container,children:[Object(O.jsx)("img",{src:e.avatar,alt:"avatar image"}),Object(O.jsxs)("div",{className:d.a.bubble,children:[Object(O.jsx)("p",{children:e.name}),Object(O.jsx)("p",{children:e.message}),Object(O.jsx)("span",{className:d.a.time,children:e.time})]})]})},x="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Some Name",m="some text",f="22:00";var v=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 1",Object(O.jsx)(h,{avatar:x,name:p,message:m,time:f}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},_=n(6),g=n(5),C=n(18),k=n.n(C),N=function(e){var t=e.red,n=e.className,c=Object(g.a)(e,["red","className"]),r="".concat(t?k.a.red:k.a.default," ").concat(n);return Object(O.jsx)("button",Object(_.a)({className:r},c))};var S=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{children:[e.affair.name," ",e.affair.priority]}),Object(O.jsx)(N,{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var y=function(e){var t=e.data.map((function(t){return Object(O.jsx)(S,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(O.jsxs)("div",{children:[t,Object(O.jsx)(N,{onClick:function(){e.setFilter("all")},children:"All"}),Object(O.jsx)(N,{onClick:function(){e.setFilter("high")},children:"High"}),Object(O.jsx)(N,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(O.jsx)(N,{onClick:function(){e.setFilter("low")},children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var E=function(){var e=Object(c.useState)(w),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("all"),s=Object(l.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 2",Object(O.jsx)(y,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},H=n(12),I=n(28),T=n.n(I),F=n(15),A=n.n(F),M=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(g.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(A.a.error," ").concat(i||""),l=a?"".concat(A.a.errorInput," ").concat(s):"".concat(s," ").concat(A.a.superInput);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(_.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:l},o)),a&&Object(O.jsx)("span",{className:j,children:a})]})},U=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,r=e.error,a=e.totalUsers,s=""===t.trim()?T.a.error:void 0;return Object(O.jsxs)("div",{children:[Object(O.jsx)(M,{value:t,onChange:n,className:s}),Object(O.jsx)("span",{children:r}),Object(O.jsx)(N,{onClick:c,disabled:!!r,children:"add"}),Object(O.jsx)("span",{children:a})]})},P=function(e){var t=e.users,n=e.addUserCallback,r=Object(c.useState)(""),a=Object(l.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)(""),j=Object(l.a)(o,2),u=j[0],b=j[1],d=t.length;return Object(O.jsx)(U,{name:s,setNameCallback:function(e){i(e.currentTarget.value),b("")},addUser:function(){""===s.trim()?b("error"):(alert("Hello  ".concat(s,"!")),n(s),i(""))},error:u,totalUsers:d})},B=n(29);var W=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 3",Object(O.jsx)(P,{users:n,addUserCallback:function(e){var t={_id:Object(B.v1)(),name:e};r([t].concat(Object(H.a)(n)))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},J=n(19),R=n.n(J),X=n(20),Z=n.n(X),D=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(g.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Z.a.checkbox," ").concat(c||"");return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(_.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),r&&Object(O.jsx)("span",{className:Z.a.spanClassName,children:r})]})};var K=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 4",Object(O.jsxs)("div",{className:R.a.column,children:[Object(O.jsx)(M,{value:n,onChangeText:r,onEnter:s,error:a}),Object(O.jsx)(M,{className:R.a.blue}),Object(O.jsx)(N,{children:"default"}),Object(O.jsx)(N,{red:!0,onClick:s,children:"delete "}),Object(O.jsx)(N,{disabled:!0,children:"disabled"}),Object(O.jsx)(D,{checked:j,onChangeChecked:u,children:"some text "}),Object(O.jsx)(D,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},L=n(30),V=n.n(L),G=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,a=Object(g.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(l.a)(s,2),o=i[0],j=i[1],u=r||{},b=u.children,d=u.onDoubleClick,h=u.className,x=Object(g.a)(u,["children","onDoubleClick","className"]),p="".concat(V.a.SuperEditableSpan," ").concat(h);return Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)(M,Object(_.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},a)):Object(O.jsxs)("span",Object(_.a)(Object(_.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:p},x),{},{children:[Object(O.jsx)("img",{src:"https://cdn-icons.flaticon.com/png/512/2356/premium/2356780.png?token=exp=1635183715~hmac=a3b8c670f0d8ed57194cb09c9e8c9916"}),b||a.value]}))})};function z(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function Q(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}z("test",{x:"A",y:1});Q("test",{x:"",y:0});var q=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 6",Object(O.jsx)("div",{children:Object(O.jsx)(G,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(O.jsx)(N,{onClick:function(){z("editable-span-value",n)},children:"save"}),Object(O.jsx)(N,{onClick:function(){r(Q("editable-span-value",""))},children:"restore"}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var Y=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{}),Object(O.jsx)(E,{}),Object(O.jsx)(W,{}),Object(O.jsx)(K,{}),Object(O.jsx)(q,{})]})},$=n(31),ee=n.n($);var te=function(){return Object(O.jsxs)("div",{className:ee.a.img,children:[Object(O.jsx)("p",{children:"click to menu"}),Object(O.jsx)("img",{src:"https://img5.goodfon.ru/wallpaper/nbig/7/c2/devochka-serdechko-anime.jpg"})]})},ne=n(32),ce=n.n(ne),re=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,r=Object(g.a)(e,["options","onChange","onChangeOption"]),a=t?t.map((function(e){return Object(O.jsx)("option",{value:e,children:e},e)})):[];return Object(O.jsx)("select",Object(_.a)(Object(_.a)({className:ce.a.select,onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)}},r),{},{children:a}))},ae=function(e){e.type;var t=e.name,n=e.options,c=e.value,r=e.onChange,a=e.onChangeOption,s=(Object(g.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),a&&a(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",onChange:s,name:t,value:e,checked:c===e}),e]},t+"-"+n)})):[];return Object(O.jsx)(O.Fragment,{children:i})},se=["x","y","z"];var ie=function(){var e=Object(c.useState)(se[1]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 7",Object(O.jsx)("div",{children:Object(O.jsx)(re,{options:se,value:n,onChangeOption:r})}),Object(O.jsx)("div",{children:Object(O.jsx)(ae,{name:"radio",options:se,value:n,onChangeOption:r})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},oe=function(e,t){switch(t.type){case"sort":var n=function(e,t){return e.name<t.name?-1:e.name>t.name?1:0};return"up"===t.payload?Object(H.a)(e.sort(n)):Object(H.a)(e.sort(n).reverse());case"check":return e.filter((function(e){return e.age>t.payload}));default:return e}},je=n(33),le=n.n(je),ue=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var be=function(){var e=Object(c.useState)(ue),t=Object(l.a)(e,2),n=t[0],r=t[1],a=n.map((function(e){return Object(O.jsxs)("div",{className:le.a.item,children:[Object(O.jsx)("span",{children:e.name}),Object(O.jsx)("span",{children:e.age})]},e._id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 8",a,Object(O.jsx)(N,{onClick:function(){return r(oe(ue,{type:"sort",payload:"up"}))},children:"sort up"}),Object(O.jsx)(N,{onClick:function(){return r(oe(ue,{type:"sort",payload:"down"}))},children:"sort down"}),Object(O.jsx)(N,{onClick:function(){return r(oe(ue,{type:"check",payload:18}))},children:"check 18"}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var de=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(ie,{}),Object(O.jsx)(be,{})]})};var Oe=function(){return Object(O.jsx)("div",{children:"\u041f\u0443\u0442\u044c \u0435\u0449\u0451 \u043d\u0435 \u043f\u0440\u0438\u0432\u0435\u043b \u043c\u0435\u043d\u044f \u0441\u044e\u0434\u0430"})},he="/pre-junior",xe="/junior",pe="/plus-junior";var me=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(u.d,{children:[Object(O.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(u.a,{to:he})}}),Object(O.jsx)(u.b,{path:he,render:function(){return Object(O.jsx)(Y,{})}}),Object(O.jsx)(u.b,{path:xe,render:function(){return Object(O.jsx)(de,{})}}),Object(O.jsx)(u.b,{path:pe,render:function(){return Object(O.jsx)(Oe,{})}}),Object(O.jsx)(u.b,{render:function(){return Object(O.jsx)(te,{})}})]})})},fe=n(8),ve=n.n(fe);var _e=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=n?"".concat(ve.a.Menu):"".concat(ve.a.Menu," ").concat(ve.a.Hidden);return Object(O.jsxs)("div",{className:ve.a.Container,children:[Object(O.jsxs)("div",{className:a,children:[Object(O.jsx)(j.b,{activeClassName:ve.a.active,className:ve.a.Navlink,to:he,children:"PRE JUNIOR"}),Object(O.jsx)(j.b,{activeClassName:ve.a.active,className:ve.a.Navlink,to:xe,children:"JUNIOR"}),Object(O.jsx)(j.b,{activeClassName:ve.a.active,className:ve.a.Navlink,to:pe,children:"PLUS_JUNIOR"})]}),Object(O.jsx)(N,{className:ve.a.Button,onClick:function(){return r(!n)},children:"Menu"})]})};var ge=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(_e,{}),Object(O.jsx)(me,{})]})})};var Ce=function(){return Object(O.jsxs)("div",{className:o.a.App,children:[Object(O.jsx)("div",{children:"react homeworks:"}),Object(O.jsx)(ge,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(Ce,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[49,1,2]]]);
//# sourceMappingURL=main.de4ab3e3.chunk.js.map