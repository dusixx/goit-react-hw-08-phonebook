"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[554,387,846,720,663,285,348,112,508],{3387:function(n,t,e){e.r(t),e.d(t,{ContactEditor:function(){return p}});var r=e(9439),i=e(2791),o=e(1285),a=e(5846),u=e(6508),l=e(3984),c=e(9085),d=e(7573),s=e(7720),f=e(2703),h=e(184),p=function(){var n=(0,i.useState)(""),t=(0,r.Z)(n,2),e=t[0],p=t[1],m=(0,i.useState)(""),g=(0,r.Z)(m,2),v=g[0],x=g[1],b=(0,i.useState)(null),w=(0,r.Z)(b,2),C=w[0],y=w[1],Z=(0,i.useRef)(null),j=(0,l.useContacts)(),k=j.items,I=j.editedId,F=j.setEditedId,B=j.pendingAction,A=j.addContactAsync,D=j.editContactAsync;(0,i.useEffect)((function(){return function(){F(null),y(null)}}),[F]),(0,i.useEffect)((function(){e||v||(F(null),y(null))}),[e,v,F]),(0,i.useEffect)((function(){var n,t,e=k.find((function(n){return n.id===I}));e&&(y(e),p(e.name),x(e.number),null===(n=Z.current)||void 0===n||n.focus(),null===(t=Z.current)||void 0===t||t.scrollIntoView())}),[I,k,F]);var E=function(n){p(""),x("")};return(0,h.jsx)(d.Block,{style:{padding:"15px"},children:(0,h.jsxs)(a.Form,{onSubmit:function(n){n.preventDefault();var t={name:(0,f.formatName)(e),number:(0,f.formatNumber)(v)};return I?function(n){if((0,f.isContactsEqual)(n,C))return E();D({id:I,data:n}).then((function(){F(null),y(null),E(),c.Am.success("The contact was successfully updated ")})).catch(c.Am.error)}(t):(0,f.isContactExists)(k,t)?void c.Am.error("The contact with the same name or number already exists"):function(n){A(n).then((function(){E(),c.Am.success("The contact was successfully added ")}))}(t)},children:[(0,h.jsx)(o.TextField,{ref:Z,name:"name",placeholder:"name",height:"var(--field-height)",autoComplete:"off",pattern:u.fieldData.name.pattern,title:u.fieldData.name.title,icon:u.fieldData.name.icon,value:e,onChange:function(n){var t;return p(null!==(t=null===n||void 0===n?void 0:n.target.value)&&void 0!==t?t:"")},required:!0}),(0,h.jsx)(o.TextField,{name:"number",placeholder:"number",height:"var(--field-height)",type:"tel",autoComplete:"off",pattern:u.fieldData.number.pattern,title:u.fieldData.number.title,icon:u.fieldData.number.icon,value:v,onChange:function(n){var t;return x(null!==(t=null===n||void 0===n?void 0:n.target.value)&&void 0!==t?t:"")},required:!0}),(0,h.jsx)(s.SubmitBtn,{loading:/(add|edit)/i.test(B),adding:!I})]})})}},5846:function(n,t,e){e.r(t),e.d(t,{Button:function(){return c},Form:function(){return l}});var r,i,o=e(168),a=e(3820),u=e(7573),l=a.Z.form(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),c=(0,a.Z)(u.ButtonPrimary)(i||(i=(0,o.Z)(["\n  margin: 0 auto 0 auto;\n  padding: 0;\n  min-width: 80px;\n  height: 35px;\n"])))},7720:function(n,t,e){e.r(t),e.d(t,{SubmitBtn:function(){return u}});var r=e(5846),i=e(2663),o=e(8855),a=e(184),u=function(n){var t=n.loading,e=void 0!==t&&t,u=n.adding,l=void 0===u||u?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.IconUserPlus,{size:"20px"}),"Add"]}):"Save";return(0,a.jsx)(r.Button,{type:"submit",children:e?(0,a.jsx)(i.SpinnerLines,{width:20,strokeColor:"white"}):l})}},5554:function(n,t,e){e.r(t),e.d(t,{ContactEditor:function(){return r.ContactEditor}});var r=e(3387)},2663:function(n,t,e){e.r(t),e.d(t,{SpinnerLines:function(){return l}});var r=e(1413),i=e(4925),o=e(6286),a=e(184),u=["width"],l=function(n){var t=n.width,e=void 0===t?40:t,l=(0,i.Z)(n,u);return(0,a.jsx)(o.s5,(0,r.Z)({strokeColor:"black",strokeWidth:"3",animationDuration:"0.75",width:e,visible:!0},l))}},3348:function(n,t,e){e.r(t),e.d(t,{TextField:function(){return d}});var r=e(1413),i=e(4925),o=e(2791),a=e(8855),u=e(6112),l=e(184),c=["value","icon","type","onChange","height","width"],d=(0,o.forwardRef)((function(n,t){var e=n.value,o=n.icon,d=n.type,s=n.onChange,f=n.height,h=n.width,p=(0,i.Z)(n,c);return(0,l.jsx)(u.Field,{height:f,width:h,children:(0,l.jsxs)(u.InputWrapper,{children:[(0,l.jsx)(u.Input,(0,r.Z)({ref:t,type:d||"text",onChange:s,value:e},p)),o&&(0,l.jsx)(u.IconWrapper,{children:"function"===typeof o?(0,l.jsx)(o,{size:"95%"}):o}),e&&(0,l.jsx)(u.ClearBtn,{type:"button",onClick:function(){return s(null)},children:(0,l.jsx)(a.IconClose,{size:"90%"})})]})})}))},6112:function(n,t,e){e.r(t),e.d(t,{ClearBtn:function(){return p},Field:function(){return s},IconWrapper:function(){return m},Input:function(){return h},InputWrapper:function(){return f}});var r,i,o,a,u,l=e(168),c=e(3820),d=e(7573),s=c.Z.label(r||(r=(0,l.Z)(["\n  width: ",";\n  height: ",";\n"])),(function(n){return n.width||"100%"}),(function(n){return n.height||"100%"})),f=c.Z.div(i||(i=(0,l.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  width: 100%;\n  height: ",";\n  color: var(--color-text);\n"])),(function(n){return n.height||"100%"})),h=c.Z.input(o||(o=(0,l.Z)(["\n  height: 100%;\n  width: 100%;\n\n  padding: 0;\n  padding-right: ",";\n  padding-left: ",";\n\n  font-family: inherit;\n  font-size: inherit;\n  background-color: white;\n\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n  outline: none;\n\n  ",";\n\n  &::placeholder {\n    opacity: 0.5;\n    text-transform: capitalize;\n  }\n\n  &:focus-visible {\n    background-color: var(--color-accent-lighter);\n    box-shadow: 0 0 0 0.25rem rgb(var(--color-blue-rgb), 0.2);\n    border-color: rgb(var(--color-blue-rgb), 0.6);\n  }\n"])),(function(n){return n.paddingRight||"30px"}),(function(n){return n.paddingLeft||"35px"}),(0,d.TransitionBase)("box-shadow border-color ackground-colo")),p=(0,c.Z)(d.ButtonBase)(a||(a=(0,l.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 5px;\n\n  height: 80%;\n  padding: 3px;\n\n  color: gray;\n  transform: translateY(-50%);\n  transition-property: color;\n\n  &:focus-visible,\n  &:hover {\n    color: var(--color-black);\n  }\n"]))),m=c.Z.span(u||(u=(0,l.Z)(["\n  ",";\n\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  height: 60%;\n\n  color: currentColor;\n  transform: translateY(-50%);\n"])),(0,d.FlexCentered)())},1285:function(n,t,e){e.r(t),e.d(t,{TextField:function(){return r.TextField}});var r=e(3348)},6508:function(n,t,e){e.r(t),e.d(t,{fieldData:function(){return i}});var r=e(8855),i={name:{title:"First and last name(optional) must contain only letters and be at least 2 characters long",pattern:"^\\s*[A-Z\u0410-\u042f\\u0406\u0407\u0404a-z\u0430-\u044f\u0456\u0457\u0454]{2,}(\\s+[A-Z\u0410-\u042f\\u0406\u0407\u0404a-z\u0430-\u044f\u0456\u0457\u0454]{2,})?\\s*$",icon:r.IconUser},number:{title:"Must be 10 digits long and may contain spaces and hyphens",pattern:"^([\\s-]*\\d[\\s-]*){10}$",icon:r.IconPhone},password:{title:"Must be at least 7 characters long",pattern:"^.{7,}$",icon:r.IconLock}}}}]);
//# sourceMappingURL=554.2a69b55b.chunk.js.map