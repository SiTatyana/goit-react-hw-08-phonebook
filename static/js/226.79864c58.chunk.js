"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[226],{3226:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a=t(2791),c=t(9434),i=t(6580),o=t(8254),s=t(6101),l=t(6015),u=t(5403),d=t(1634),h=t(3329),f=function(){var n=(0,c.I0)(),e=(0,c.v9)((function(n){return n.filter}));return(0,h.jsx)(l.Z,{children:(0,h.jsx)(s.Z,{label:"Find contact by Name",type:"text",name:"search",value:e,onChange:function(e){n((0,d.T)(e.currentTarget.value))},InputProps:{startAdornment:(0,h.jsx)(o.Z,{position:"start",children:(0,h.jsx)(u.Z,{})})},variant:"outlined"})})},x=t(6052),m=t(7247),j=t(2087),p=t(4346),v=t(3811),Z=function(n){var e=n.contact,t=e.id,r=e.name,a=e.number,i=(0,c.I0)();return(0,h.jsxs)(j.ZP,{secondaryAction:(0,h.jsx)(v.Z,{"aria-label":"comment",onClick:function(){i((0,x.GK)(t))},children:(0,h.jsx)(m.Z,{})}),children:[(0,h.jsx)(p.Z,{primary:r}),(0,h.jsx)(p.Z,{primary:a})]},t)},b=t(5629),g=function(n){var e=n.contacts;return(0,h.jsx)(b.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:e.map((function(n){return(0,h.jsx)(Z,{contact:n},n.id)}))})},C=t(168),w=t(225).Z.div(r||(r=(0,C.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n"]))),y=function(n){return n.contacts.items},k=function(n){return n.contacts.isLoading},_=function(n){return n.contacts.error},I=function(n){return n.filter},E=t(885),P=t(7205),S=t(788),q=t(7323),A=t(8440),D=t(9571),K=t(464);function L(){var n=a.useState(!1),e=(0,E.Z)(n,2),t=e[0],r=e[1],i=function(){r(!1)},o=(0,c.I0)(),l=(0,c.v9)(y),u=(0,a.useState)(""),d=(0,E.Z)(u,2),f=d[0],m=d[1],j=(0,a.useState)(""),p=(0,E.Z)(j,2),v=p[0],Z=p[1],b=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":m(r);break;case"number":Z(r);break;default:console.log("incorrect input name")}};return(0,h.jsxs)("div",{children:[(0,h.jsx)(P.Z,{variant:"outlined",onClick:function(){r(!0)},children:"Create new contact"}),(0,h.jsxs)(S.Z,{open:t,onClose:i,children:[(0,h.jsx)(K.Z,{children:"Create new contact"}),(0,h.jsxs)(A.Z,{sx:{display:"flex",flexDirection:"column",mr:1,alignItems:"center"},children:[(0,h.jsx)(D.Z,{children:"Please enter contact's name and phone number here."}),(0,h.jsx)(s.Z,{label:"Name",name:"name",variant:"filled",type:"text",placeholder:"Enter name",onChange:b,required:!0,fullWidth:!0}),(0,h.jsx)(s.Z,{label:"Phone number",name:"number",variant:"filled",type:"tel",placeholder:"Enter phone number",onChange:b,required:!0,fullWidth:!0})]}),(0,h.jsxs)(q.Z,{children:[(0,h.jsx)(P.Z,{onClick:i,children:"Cancel"}),(0,h.jsx)(P.Z,{onClick:function(n){n.preventDefault(),l.find((function(n){return n.name===f}))?alert("".concat(f," is already in your phone book")):(o((0,x.uK)({name:f,number:v})),m(""),Z(""),i())},children:"Add contact"})]})]})]})}var T=function(){var n=(0,c.I0)();(0,a.useEffect)((function(){n(x.K2())}),[n]);var e=(0,c.v9)(y),t=(0,c.v9)(I),r=(0,c.v9)(k),o=(0,c.v9)(_),s=t.toLowerCase(),l=e.filter((function(n){return n.name.toLowerCase().includes(s)}));return(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:20,color:"#010101",width:"auto",padding:"20px"},children:[(0,h.jsxs)(w,{children:[(0,h.jsx)(L,{}),(0,h.jsx)(f,{})]}),r&&!o&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.Z,{})," ",(0,h.jsx)("br",{}),(0,h.jsx)("b",{children:"Request in progress..."})]}),o&&(0,h.jsxs)("p",{children:['Oops, something went wrong. Error is: "',o,'"']}),!r&&e.length>0&&(0,h.jsx)(g,{contacts:l})]})}}}]);
//# sourceMappingURL=226.79864c58.chunk.js.map