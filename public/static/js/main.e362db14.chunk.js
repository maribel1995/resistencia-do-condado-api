(this["webpackJsonpthe-resistance-front"]=this["webpackJsonpthe-resistance-front"]||[]).push([[0],{45:function(e,t,n){e.exports=n(88)},50:function(e,t,n){},51:function(e,t,n){},81:function(e,t){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(41),o=n.n(r),i=(n(50),n(6)),u=(n(51),n(5)),l=n(15),s=n(42),m=n.n(s)()(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL);var b=function(){var e=Object(a.useContext)(E),t=Object(i.a)(e,2),n=t[0],r=(t[1],Object(a.useState)(!1)),o=Object(i.a)(r,2),u=(o[0],o[1]),l=Object(a.useContext)(f),s=Object(i.a)(l,2),b=s[0];s[1],Object(a.useEffect)((function(){return function(){m.emit("unsubscribe","saiu")}}),[]);var O=(n[0]||[]).playerId;return c.a.createElement("div",null,c.a.createElement("h3",null,"Jogadores na sala"),c.a.createElement("ul",null,n.map((function(e,t){return c.a.createElement("li",{key:t},e.nickname)}))),O===b?c.a.createElement("button",{onClick:function(){n.length>=2&&u(!0)}},"Come\xe7ar"):"")},E=Object(a.createContext)([]),f=Object(a.createContext)([]);var O=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),s=Object(i.a)(o,2),O=s[0],v=s[1],d=Object(a.useState)(""),h=Object(i.a)(d,2),j=h[0],p=h[1];return Object(a.useEffect)((function(){m.once("send your id",(function(e){p(e)}))}),[]),c.a.createElement(E.Provider,{value:[O,v]},c.a.createElement(f.Provider,{value:[j,p]},c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/room"},c.a.createElement(b,null)),c.a.createElement(u.a,{path:"/"},c.a.createElement("form",null,c.a.createElement("label",null,"Nickname"),c.a.createElement("input",{type:"text",name:"nickname",onChange:function(e){var t=e.target.value;r(t)}}),c.a.createElement(l.b,{to:"/room",onClick:function(){m.emit("user set nick",n),m.emit("subscribe","entrou"),m.on("update user",(function(e){v(e)}))}},"Click aqui para entrar"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(2),d=Object(v.a)();o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{history:d},c.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.e362db14.chunk.js.map