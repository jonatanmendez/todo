(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(1),c=o.n(n),a=o(4),r=o.n(a),l=o(6),s=o(2);var u=o(0),d=c.a.createContext();function i(e){var t=function(e,t){var o=c.a.useState(!1),n=Object(s.a)(o,2),a=n[0],r=n[1],l=c.a.useState(!0),u=Object(s.a)(l,2),d=u[0],i=u[1],j=c.a.useState(t),b=Object(s.a)(j,2),m=b[0],O=b[1];return c.a.useEffect((function(){setTimeout((function(){try{var o,n=localStorage.getItem(e);n?o=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),o=t),O(o),i(!1)}catch(a){r(a)}}),1e3)})),{item:m,saveItem:function(t){try{var o=JSON.stringify(t);localStorage.setItem(e,o),O(t)}catch(a){r(a)}},loading:d,error:a}}("TODOS_V1",[]),o=t.item,n=t.saveItem,a=t.loading,r=t.error,i=c.a.useState(""),j=Object(s.a)(i,2),b=j[0],m=j[1],O=c.a.useState(!1),h=Object(s.a)(O,2),x=h[0],f=h[1],p=o.filter((function(e){return!!e.completed})).length,v=o.length,T=[];T=!b.length>=1?o:o.filter((function(e){var t=e.text.toLowerCase(),o=b.toLowerCase();return t.includes(o)}));return Object(u.jsx)(d.Provider,{value:{loading:a,error:r,totalTodos:v,completedTodos:p,searchValue:b,setSearchValue:m,searchedTodos:T,addTodo:function(e){var t=Object(l.a)(o);t.push({completed:!1,text:e}),n(t)},completeTodo:function(e){var t=o.findIndex((function(t){return t.text===e})),c=Object(l.a)(o);c[t].completed=!0,n(c)},deleteTodo:function(e){var t=o.findIndex((function(t){return t.text===e})),c=Object(l.a)(o);c.splice(t,1),n(c)},openModal:x,setOpenModal:f},children:e.children})}o(13);function j(){var e=c.a.useContext(d),t=e.totalTodos,o=e.completedTodos;return Object(u.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",o," de ",t," Todos"]})}o(14);function b(){var e=c.a.useContext(d),t=e.serchValue,o=e.setSearchValue;return Object(u.jsx)("input",{className:"TodoSearch",placeholder:"cebolla",value:t,onChange:function(e){console.log(e.target.value),o(e.target.value)}})}o(15);function m(e){return Object(u.jsx)("section",{children:Object(u.jsx)("ul",{children:e.children})})}o(16);function O(e){return Object(u.jsxs)("li",{className:"TodoItem",children:[Object(u.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:"\u221a"}),Object(u.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(u.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:"X"})]})}o(17);function h(){var e=c.a.useState(""),t=Object(s.a)(e,2),o=t[0],n=t[1],a=c.a.useContext(d),r=a.addTodo,l=a.setOpenModal;return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(o),l(!1)},children:[Object(u.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(u.jsx)("textarea",{value:o,onChange:function(e){n(e.target.value)},placeholder:"Cortar la cebolla oara el almuerzo"}),Object(u.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(u.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){l(!1)},children:"Cancelar"}),Object(u.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:"A\xf1adir"})]})]})}o(18);function x(e){return Object(u.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}o(19);function f(e){var t=e.children;return r.a.createPortal(Object(u.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}function p(){var e=c.a.useContext(d),t=e.error,o=e.loading,n=e.searchedTodos,a=e.completeTodo,r=e.deleteTodo,l=e.openModal,s=e.setOpenModal;return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsx)(b,{}),Object(u.jsxs)(m,{children:[t&&Object(u.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."}),o&&Object(u.jsx)("p",{children:"Estamos cargando, no desesperes..."}),!o&&!n.length&&Object(u.jsx)("p",{children:"\xa1Crea tu primer TODO!"}),n.map((function(e){return Object(u.jsx)(O,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),!!l&&Object(u.jsx)(f,{children:Object(u.jsx)(h,{})}),Object(u.jsx)(x,{setOpenModal:s})]})}var v=function(){return Object(u.jsx)(i,{children:Object(u.jsx)(p,{})})};r.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.1a26e1a9.chunk.js.map