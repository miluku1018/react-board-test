(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),i=e(9),o=e.n(i),u=e(4),a=e(3),b=e(2);function s(){var n=Object(a.a)([""]);return s=function(){return n},n}function j(){var n=Object(a.a)(["\n  margin-top: 16px;\n  color: red;\n"]);return j=function(){return n},n}function d(){var n=Object(a.a)(["\n  margin-top: 16px;\n  font-size: 16px;\n"]);return d=function(){return n},n}function f(){var n=Object(a.a)([""]);return f=function(){return n},n}function p(){var n=Object(a.a)(["\n  color: rgba(23, 78, 55);\n  font-size: 14px;\n"]);return p=function(){return n},n}function O(){var n=Object(a.a)(["\n  display: flex;\n  align-item: center;\n  justify-content: space-between;\n  padding-bottom: 4px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n"]);return O=function(){return n},n}function l(){var n=Object(a.a)(["\n  border: 1px solid black;\n  padding: 8px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n"]);return l=function(){return n},n}function h(){var n=Object(a.a)(["\n  margin-top: 16px;\n"]);return h=function(){return n},n}function m(){var n=Object(a.a)(["\n  margin-top: 8px;\n"]);return m=function(){return n},n}function x(){var n=Object(a.a)(["\n  display: block;\n  width: 100%;\n"]);return x=function(){return n},n}function v(){var n=Object(a.a)(["\n  margin-top: 16px;\n"]);return v=function(){return n},n}function g(){var n=Object(a.a)(["\n  color: #333;\n"]);return g=function(){return n},n}function y(){var n=Object(a.a)(["\n  width: 400px;\n  margin: 0 auto;\n"]);return y=function(){return n},n}var S=b.b.div(y()),w=b.b.h1(g()),k=b.b.form(v()),_=b.b.textarea(x()),J=b.b.button(m()),z=b.b.div(h()),A=b.b.div(l()),D=b.b.div(O()),E=b.b.div(p()),N=b.b.div(f()),B=b.b.div(d()),C=b.b.div(j()),F=b.b.div(s());function H(n){var t=n.author,e=n.time,c=n.children;return Object(r.jsxs)(A,{children:[Object(r.jsxs)(D,{children:[Object(r.jsx)(E,{children:t}),Object(r.jsx)(N,{children:e})]}),Object(r.jsx)(B,{children:c})]})}var I=function(){var n=Object(c.useState)(null),t=Object(u.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(null),a=Object(u.a)(o,2),b=a[0],s=a[1],j=Object(c.useState)(),d=Object(u.a)(j,2),f=d[0],p=d[1],O=Object(c.useState)(),l=Object(u.a)(O,2),h=l[0],m=l[1],x=Object(c.useState)(!1),v=Object(u.a)(x,2),g=v[0],y=v[1],A=function(){return fetch("https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc").then((function(n){return n.json()})).then((function(n){i(n)})).catch((function(n){s(n.message)}))};return Object(c.useEffect)((function(){A()}),[]),Object(r.jsxs)(S,{children:[g&&Object(r.jsx)(F,{}),Object(r.jsx)(w,{children:"\u7559\u8a00\u677f"}),Object(r.jsxs)(k,{onSubmit:function(n){n.preventDefault(),g||(y(!0),fetch("https://student-json-api.lidemy.me/comments",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:"Hippo",body:f})}).then((function(n){return n.json()})).then((function(n){y(!1),0!==n.ok?(p(""),A()):m(n.message)})).catch((function(n){y(!1),m(n.message)})))},children:[Object(r.jsx)(_,{value:f,onChange:function(n){p(n.target.value)},onFocus:function(){m(null)},rows:10}),Object(r.jsx)(J,{children:"\u9001\u51fa\u7559\u8a00"}),h&&Object(r.jsx)(C,{children:h})]}),b&&Object(r.jsxs)(C,{children:["Something went wrong. ",b.toString()]}),e&&0===e.length&&Object(r.jsx)("div",{children:"No Message"}),Object(r.jsx)(z,{children:e&&e.map((function(n){return Object(r.jsx)(H,{author:n.nickname,time:new Date(n.createdAt).toLocaleString(),children:n.body},n.id)}))})]})};o.a.render(Object(r.jsx)(b.a,{theme:{colors:{primary_300:"#ff7979",primary_400:"#e33e3e",primary_500:"#af0505"}},children:Object(r.jsx)(I,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.aad9bbe0.chunk.js.map