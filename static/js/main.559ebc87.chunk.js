(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){e.exports={bubble_container:"Message_bubble_container__1yJj1",bubble:"Message_bubble__1b86x",time:"Message_time__1uLtp"}},14:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__15U20",errorInput:"SuperInputText_errorInput__1F-8H",error:"SuperInputText_error__RZW9v"}},17:function(e,t,n){e.exports={default:"SuperButton_default__2Cbdb",red:"SuperButton_red__D5mXi",disable:"SuperButton_disable__e5nTl"}},18:function(e,t,n){e.exports={blue:"HW4_blue__mZCA6",column:"HW4_column__2p9RV",testSpanError:"HW4_testSpanError__23Vip"}},19:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__ppMcR",spanClassName:"SuperCheckbox_spanClassName__3FQOO"}},26:function(e,t,n){e.exports={App:"App_App__1KwNM"}},27:function(e,t,n){e.exports={someClass:"Greeting_someClass__3yhLf",error:"Greeting_error__3Zkgt"}},29:function(e,t,n){e.exports={SuperEditableSpan:"SuperEditableSpan_SuperEditableSpan__2n0w-"}},30:function(e,t,n){e.exports={img:"Error404_img__3H1MZ"}},38:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(25),s=n.n(a),i=(n(38),n(26)),o=n.n(i),j=n(9),l=n(3),u=n(2),b=n(13),d=n.n(b),O=n(0);var h=function(e){return Object(O.jsxs)("div",{className:d.a.bubble_container,children:[Object(O.jsx)("img",{src:e.avatar,alt:"avatar image"}),Object(O.jsxs)("div",{className:d.a.bubble,children:[Object(O.jsx)("p",{children:e.name}),Object(O.jsx)("p",{children:e.message}),Object(O.jsx)("span",{className:d.a.time,children:e.time})]})]})},x="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Some Name",m="some text",f="22:00";var v=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 1",Object(O.jsx)(h,{avatar:x,name:p,message:m,time:f}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},_=n(7),g=n(8),C=n(17),k=n.n(C),N=function(e){var t=e.red,n=e.className,c=Object(g.a)(e,["red","className"]),r="".concat(t?k.a.red:k.a.default," ").concat(n);return Object(O.jsx)("button",Object(_.a)({className:r},c))};var S=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{children:[e.affair.name," ",e.affair.priority]}),Object(O.jsx)(N,{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var y=function(e){var t=e.data.map((function(t){return Object(O.jsx)(S,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(O.jsxs)("div",{children:[t,Object(O.jsx)(N,{onClick:function(){e.setFilter("all")},children:"All"}),Object(O.jsx)(N,{onClick:function(){e.setFilter("high")},children:"High"}),Object(O.jsx)(N,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(O.jsx)(N,{onClick:function(){e.setFilter("low")},children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var E=function(){var e=Object(c.useState)(w),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("all"),s=Object(l.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 2",Object(O.jsx)(y,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},H=n(33),I=n(27),A=n.n(I),F=n(14),M=n.n(F),T=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(g.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(M.a.error," ").concat(i||""),l=a?"".concat(M.a.errorInput," ").concat(s):"".concat(s," ").concat(M.a.superInput);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(_.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:l},o)),a&&Object(O.jsx)("span",{className:j,children:a})]})},U=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,r=e.error,a=e.totalUsers,s=""===t.trim()?A.a.error:void 0;return Object(O.jsxs)("div",{children:[Object(O.jsx)(T,{value:t,onChange:n,className:s}),Object(O.jsx)("span",{children:r}),Object(O.jsx)(N,{onClick:c,disabled:!!r,children:"add"}),Object(O.jsx)("span",{children:a})]})},B=function(e){var t=e.users,n=e.addUserCallback,r=Object(c.useState)(""),a=Object(l.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)(""),j=Object(l.a)(o,2),u=j[0],b=j[1],d=t.length;return Object(O.jsx)(U,{name:s,setNameCallback:function(e){i(e.currentTarget.value),b("")},addUser:function(){""===s.trim()?b("error"):(alert("Hello  ".concat(s,"!")),n(s),i(""))},error:u,totalUsers:d})},J=n(28);var P=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 3",Object(O.jsx)(B,{users:n,addUserCallback:function(e){var t={_id:Object(J.v1)(),name:e};r([t].concat(Object(H.a)(n)))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},W=n(18),R=n.n(W),Z=n(19),D=n.n(Z),K=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(g.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(D.a.checkbox," ").concat(c||"");return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(_.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),r&&Object(O.jsx)("span",{className:D.a.spanClassName,children:r})]})};var L=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 4",Object(O.jsxs)("div",{className:R.a.column,children:[Object(O.jsx)(T,{value:n,onChangeText:r,onEnter:s,error:a}),Object(O.jsx)(T,{className:R.a.blue}),Object(O.jsx)(N,{children:"default"}),Object(O.jsx)(N,{red:!0,onClick:s,children:"delete "}),Object(O.jsx)(N,{disabled:!0,children:"disabled"}),Object(O.jsx)(K,{checked:j,onChangeChecked:u,children:"some text "}),Object(O.jsx)(K,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},V=n(29),X=n.n(V),G=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,a=Object(g.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(l.a)(s,2),o=i[0],j=i[1],u=r||{},b=u.children,d=u.onDoubleClick,h=u.className,x=Object(g.a)(u,["children","onDoubleClick","className"]),p="".concat(X.a.SuperEditableSpan," ").concat(h);return Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)(T,Object(_.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},a)):Object(O.jsxs)("span",Object(_.a)(Object(_.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:p},x),{},{children:[Object(O.jsx)("img",{src:"https://cdn-icons.flaticon.com/png/512/2356/premium/2356780.png?token=exp=1635183715~hmac=a3b8c670f0d8ed57194cb09c9e8c9916"}),b||a.value]}))})};function q(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function z(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}q("test",{x:"A",y:1});z("test",{x:"",y:0});var Q=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 6",Object(O.jsx)("div",{children:Object(O.jsx)(G,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(O.jsx)(N,{onClick:function(){q("editable-span-value",n)},children:"save"}),Object(O.jsx)(N,{onClick:function(){r(z("editable-span-value",""))},children:"restore"}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var Y=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{}),Object(O.jsx)(E,{}),Object(O.jsx)(P,{}),Object(O.jsx)(L,{}),Object(O.jsx)(Q,{})]})},$=n(30),ee=n.n($);var te=function(){return Object(O.jsxs)("div",{className:ee.a.img,children:[Object(O.jsx)("p",{children:"click to menu"}),Object(O.jsx)("img",{src:"https://img5.goodfon.ru/wallpaper/nbig/7/c2/devochka-serdechko-anime.jpg"})]})};var ne=function(){return Object(O.jsx)("div",{children:"\u041f\u0443\u0442\u044c \u0435\u0449\u0451 \u043d\u0435 \u043f\u0440\u0438\u0432\u0435\u043b \u043c\u0435\u043d\u044f \u0441\u044e\u0434\u0430"})};var ce=function(){return Object(O.jsx)("div",{children:"\u041f\u0443\u0442\u044c \u0435\u0449\u0451 \u043d\u0435 \u043f\u0440\u0438\u0432\u0435\u043b \u043c\u0435\u043d\u044f \u0441\u044e\u0434\u0430"})},re="/pre-junior",ae="/junior",se="/plus-junior";var ie=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(u.d,{children:[Object(O.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(u.a,{to:re})}}),Object(O.jsx)(u.b,{path:re,render:function(){return Object(O.jsx)(Y,{})}}),Object(O.jsx)(u.b,{path:ae,render:function(){return Object(O.jsx)(ne,{})}}),Object(O.jsx)(u.b,{path:se,render:function(){return Object(O.jsx)(ce,{})}}),Object(O.jsx)(u.b,{render:function(){return Object(O.jsx)(te,{})}})]})})},oe=n(6),je=n.n(oe);var le=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=n?"".concat(je.a.Menu):"".concat(je.a.Menu," ").concat(je.a.Hidden);return Object(O.jsxs)("div",{className:je.a.Container,children:[Object(O.jsxs)("div",{className:a,children:[Object(O.jsx)(j.b,{activeClassName:je.a.active,className:je.a.Navlink,to:re,children:"PRE JUNIOR"}),Object(O.jsx)(j.b,{activeClassName:je.a.active,className:je.a.Navlink,to:ae,children:"JUNIOR"}),Object(O.jsx)(j.b,{activeClassName:je.a.active,className:je.a.Navlink,to:se,children:"PLUS_JUNIOR"})]}),Object(O.jsx)(N,{className:je.a.Button,onClick:function(){return r(!n)},children:"Menu"})]})};var ue=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(le,{}),Object(O.jsx)(ie,{})]})})};var be=function(){return Object(O.jsxs)("div",{className:o.a.App,children:[Object(O.jsx)("div",{children:"react homeworks:"}),Object(O.jsx)(ue,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(be,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports={Container:"Header_Container__1UleV",Navlink:"Header_Navlink__1-rVO",Menu:"Header_Menu__2i1zW",Hidden:"Header_Hidden__1cdI7",active:"Header_active__1shXv"}}},[[47,1,2]]]);
//# sourceMappingURL=main.559ebc87.chunk.js.map