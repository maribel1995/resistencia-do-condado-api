(this["webpackJsonpthe-resistance-front"]=this["webpackJsonpthe-resistance-front"]||[]).push([[0],{30:function(e,t,n){e.exports=n(59)},35:function(e,t,n){},36:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(26),r=n.n(o),u=(n(35),n(7)),l=(n(36),n(10)),i=n.n(l),s=n(6),m=n(11),h=n(27),p=function(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),l=Object(u.a)(r,2),s=l[0],p=l[1],d=Object(a.useState)("nao foi setado"),f=Object(u.a)(d,2),b=f[0],E=f[1],g=Object(a.useState)("nao foi setado"),j=Object(u.a)(g,2),v=j[0],O=j[1];Object(a.useEffect)((function(){w()}));var k=function(e){var t=e.target.value,a=e.target.name;o(Object(h.a)({},n,Object(m.a)({},a,Number(t))))},w=function(){i.a.get("https://resistencia-do-condado.herokuapp.com/api/game/status").then((function(e){console.log(e),E(e.data.spy.count),O(e.data.resistance.count)})).catch((function(e){console.log(e)})).then((function(){}))};return c.a.createElement("div",null,c.a.createElement("h2",null,"Admin"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.a.post("https://resistencia-do-condado.herokuapp.com/api/game",n).then((function(e){p(e.data.status)})).catch((function(e){console.log(e)}))}},c.a.createElement("label",null,"Espi\xf5es:"),c.a.createElement("input",{type:"number",name:"spyCount",onChange:k,required:!0}),c.a.createElement("label",null,"Resistencia:"),c.a.createElement("input",{type:"number",name:"resistanceCount",onChange:k,required:!0}),c.a.createElement("input",{type:"submit"})),c.a.createElement("h2",null,s),c.a.createElement("h3",null,"Espi\xf5es: ",b),c.a.createElement("h3",null,"Resistencia: ",v))};var d=function(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(!1),l=Object(u.a)(r,2),m=l[0],h=l[1];return c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/mari"},c.a.createElement(p,null)),c.a.createElement(s.a,{path:"/"},c.a.createElement("button",{disabled:m,onClick:function(){i.a.get("https://resistencia-do-condado.herokuapp.com/api/game").then((function(e){o(e.data)})).catch((function(e){console.log(e)})),h(!0)}},"Descubra quem voc\xea \xe9"),c.a.createElement("h1",null,"Voce \xe9 um ",n.youAre)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=n(13);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f.a,null,c.a.createElement(d,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.add542e4.chunk.js.map