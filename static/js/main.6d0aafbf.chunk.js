(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),c=n(4),a=n.n(c),o=(n(14),n(5)),i=n(6),h=n(2),l=n(8),u=n(7),d=(n.p,n(15),n(16),n(17),function(e){return Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(s.jsxs)("h2",{children:[" ",e.monster.name]}),Object(s.jsxs)("p",{children:[" ",e.monster.email]})]})}),j=function(e){return Object(s.jsxs)("div",{className:"card-list",children:[e.monsters.map((function(e){return Object(s.jsx)(d,{monster:e},e.id)})),Object(s.jsx)("img",{alt:"monster2",src:"smiley.gif"})]})},m=(n(18),function(e){var t=e.placeholder,n=e.handleChange;return Object(s.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:" Monster Rolodex2"}),Object(s.jsx)(m,{placeholder:"search monsters",handleChange:this.handleChange}),Object(s.jsx)(j,{monsters:r})]})}}]),n}(r.Component);a.a.render(Object(s.jsx)(b,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.6d0aafbf.chunk.js.map