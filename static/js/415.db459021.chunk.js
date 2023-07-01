"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415,881,390,735,148,748,995,508],{5881:function(n,e,t){t.r(e),t.d(e,{LoginForm:function(){return f}});var r=t(9439),o=t(2791),i=t(6508),a=t(865),l=t(3984),u=t(2703),s=t(9085),c=t(735),d=t(4373),p=t(2390),h=t(184),f=function(n){var e=n.signup,t=void 0!==e&&e,f=(0,l.useAuth)(),g=f.loginAsync,x=f.signupAsync,m=f.pendingAction,v=(0,o.useState)(""),w=(0,r.Z)(v,2),b=w[0],Z=w[1],y=(0,o.useState)(""),F=(0,r.Z)(y,2),j=F[0],C=F[1],k=(0,o.useState)(""),I=(0,r.Z)(k,2),L=I[0],S=I[1],z=(0,o.useState)(!1),D=(0,r.Z)(z,2),A=D[0],B=D[1];return(0,h.jsxs)(p.Form,{onSubmit:function(n){n.preventDefault(),(t?x:g)({name:(0,u.formatName)(b),email:j.trim(),password:L.trim()}).then((function(n){var e=n.user;s.Am.success("Welcome, ".concat(e.name)),Z(""),C(""),S("")})).catch((function(){return s.Am.error("Invalid email or a user with the same email already exists")}))},children:[(0,h.jsx)(p.FormTitle,{children:t?"Create your account":"Login to your account"}),t&&(0,h.jsx)(p.FormField,{name:"name",placeholder:"name",autoComplete:"off",pattern:i.fieldData.name.pattern,title:i.fieldData.name.title,icon:i.fieldData.name.icon,value:b,maxLength:35,onChange:function(n){var e;return Z(null!==(e=null===n||void 0===n?void 0:n.target.value)&&void 0!==e?e:"")},required:!0}),(0,h.jsx)(p.FormField,{placeholder:"email",type:"email",autoComplete:"off",icon:(0,h.jsx)(a.IconMail,{size:18}),value:j,onChange:function(n){var e;return C(null!==(e=null===n||void 0===n?void 0:n.target.value)&&void 0!==e?e:"")},required:!0}),(0,h.jsxs)(p.PasswordField,{children:[(0,h.jsx)(p.FormField,{placeholder:"password",type:A?"text":"password",autoComplete:"off",pattern:i.fieldData.password.pattern,icon:i.fieldData.password.icon,title:i.fieldData.password.title,value:L,onChange:function(n){var e;return S(null!==(e=null===n||void 0===n?void 0:n.target.value)&&void 0!==e?e:"")},minLength:7,maxLength:20,required:!0}),(0,h.jsxs)(p.ShowPassword,{children:[A?(0,h.jsx)(d.qVU,{size:15}):(0,h.jsx)(d.CcW,{size:15}),(0,h.jsx)("input",{type:"checkbox",onClick:function(){return B((function(n){return!n}))}}),(0,h.jsx)("span",{children:A?"Hide":"Show"})," password"]})]}),(0,h.jsxs)(p.Button,{children:[m&&(0,h.jsx)(c.SpinnerLines,{width:20,strokeColor:"white"}),!m&&(t?"Sign Up":"Log In")]})]})}},2390:function(n,e,t){t.r(e),t.d(e,{Button:function(){return x},Form:function(){return h},FormField:function(){return g},FormTitle:function(){return f},PasswordField:function(){return m},ShowPassword:function(){return v}});var r,o,i,a,l,u,s=t(168),c=t(3820),d=t(1148),p=t(7573),h=c.Z.form(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n\n  width: 90%;\n  margin: 0 auto;\n  padding: 15px 20px;\n\n  background-color: white;\n  box-shadow: var(--box-shadow);\n  border-radius: var(--border-radius);\n  overflow: auto;\n\n  @media screen and (min-width: 768px) {\n    width: 400px;\n  }\n"]))),f=c.Z.h2(o||(o=(0,s.Z)(["\n  letter-spacing: -0.1px;\n"]))),g=(0,c.Z)(d.TextField)(i||(i=(0,s.Z)(["\n  height: var(--field-height);\n  padding-left: 40px;\n"]))),x=(0,c.Z)(p.ButtonPrimary)(a||(a=(0,s.Z)(["\n  min-width: 100px;\n  height: 35px;\n"]))),m=c.Z.div(l||(l=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n"]))),v=c.Z.label(u||(u=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 2px;\n\n  font-size: 12px;\n  line-height: 0;\n  padding-left: 10px;\n  cursor: pointer;\n  user-select: none;\n\n  & input {\n    appearance: unset;\n  }\n"])))},735:function(n,e,t){t.r(e),t.d(e,{SpinnerLines:function(){return u}});var r=t(1413),o=t(4925),i=t(6286),a=t(184),l=["width"],u=function(n){var e=n.width,t=void 0===e?40:e,u=(0,o.Z)(n,l);return(0,a.jsx)(i.s5,(0,r.Z)({strokeColor:"black",strokeWidth:"3",animationDuration:"0.75",width:t,visible:!0},u))}},1748:function(n,e,t){t.r(e),t.d(e,{TextField:function(){return c}});var r=t(1413),o=t(4925),i=t(2791),a=t(865),l=t(2995),u=t(184),s=["value","icon","type","onChange","height","width"],c=(0,i.forwardRef)((function(n,e){var t=n.value,i=n.icon,c=n.type,d=n.onChange,p=n.height,h=n.width,f=(0,o.Z)(n,s);return(0,u.jsx)(l.Field,{height:p,width:h,children:(0,u.jsxs)(l.InputWrapper,{children:[(0,u.jsx)(l.Input,(0,r.Z)({ref:e,type:c||"text",onChange:d,value:t},f)),i&&(0,u.jsx)(l.IconWrapper,{children:"function"===typeof i?(0,u.jsx)(i,{size:"100%"}):i}),t&&(0,u.jsx)(l.ClearBtn,{type:"button",onClick:function(){return d(null)},children:(0,u.jsx)(a.IconClose,{size:"100%"})})]})})}))},2995:function(n,e,t){t.r(e),t.d(e,{ClearBtn:function(){return f},Field:function(){return d},IconWrapper:function(){return g},Input:function(){return h},InputWrapper:function(){return p}});var r,o,i,a,l,u=t(168),s=t(3820),c=t(7573),d=s.Z.label(r||(r=(0,u.Z)(["\n  width: ",";\n  height: ",";\n"])),(function(n){return n.width||"100%"}),(function(n){return n.height||"100%"})),p=s.Z.div(o||(o=(0,u.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  width: 100%;\n  height: ",";\n  color: var(--color-text);\n"])),(function(n){return n.height||"100%"})),h=s.Z.input(i||(i=(0,u.Z)(["\n  height: 100%;\n  width: 100%;\n\n  padding: 0;\n  padding-right: ",";\n  padding-left: ",";\n\n  font-family: inherit;\n  font-size: inherit;\n  background-color: white;\n\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n  outline: none;\n\n  ",";\n\n  &::placeholder {\n    opacity: 0.5;\n    text-transform: capitalize;\n  }\n\n  &:focus-visible {\n    background-color: var(--color-accent-lighter);\n    box-shadow: 0 0 0 0.25rem rgb(var(--color-blue-rgb), 0.2);\n    border-color: rgb(var(--color-blue-rgb), 0.6);\n  }\n"])),(function(n){return n.paddingRight||"30px"}),(function(n){return n.paddingLeft||"35px"}),(0,c.TransitionBase)("box-shadow border-color ackground-colo")),f=(0,s.Z)(c.ButtonBase)(a||(a=(0,u.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 5px;\n\n  height: 80%;\n  padding: 3px;\n\n  color: gray;\n  transform: translateY(-50%);\n  transition-property: color;\n\n  &:focus-visible,\n  &:hover {\n    color: var(--color-black);\n  }\n"]))),g=s.Z.span(l||(l=(0,u.Z)(["\n  ",";\n\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  height: 60%;\n\n  color: currentColor;\n  transform: translateY(-50%);\n"])),(0,c.FlexCentered)())},1148:function(n,e,t){t.r(e),t.d(e,{TextField:function(){return r.TextField}});var r=t(1748)},6508:function(n,e,t){t.r(e),t.d(e,{fieldData:function(){return o}});var r=t(865),o={name:{title:"First and last name(optional) must contain only letters and be at least 2 characters long",pattern:"^\\s*[A-Z\u0410-\u042f\\u0406\u0407\u0404a-z\u0430-\u044f\u0456\u0457\u0454]{2,}(\\s+[A-Z\u0410-\u042f\\u0406\u0407\u0404a-z\u0430-\u044f\u0456\u0457\u0454]{2,})?\\s*$",icon:r.IconUser},number:{title:"Must be 10 digits long and may contain spaces and hyphens",pattern:"^([\\s-]*\\d[\\s-]*){10}$",icon:r.IconPhone},password:{title:"Must be at least 7 characters long",pattern:"^.{7,}$",icon:r.IconLock}}},5415:function(n,e,t){t.r(e);var r=t(5881),o=t(184);e.default=function(){return(0,o.jsx)(r.LoginForm,{})}}}]);
//# sourceMappingURL=415.db459021.chunk.js.map