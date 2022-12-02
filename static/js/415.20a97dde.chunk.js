"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[415],{5415:function(e,o,t){t.r(o);var n=t(6871),a=t(1614),r=t(890),i=t(5193),c=t(6151),l=t(184);o.default=function(){var e=(0,n.s0)(),o=(0,i.Z)("(min-width:600px)");return(0,l.jsxs)(a.Z,{component:"main",sx:{display:"flex",alignItems:"center",flexDirection:"column",paddingTop:10},children:[(0,l.jsx)(r.Z,{component:"h1",variant:"h3",sx:{fontSize:"".concat(o?"60px":"48px"),textAlign:"center",marginBottom:3,color:"#f7f7f7"},children:"PhoneBook! Create an Account"}),(0,l.jsx)(c.Z,{type:"button",variant:"contained",size:"large",onClick:function(){e("/register")},sx:{backgroundColor:"#8A2BE2"},children:"Get started"})]})}},6151:function(e,o,t){t.d(o,{Z:function(){return k}});var n=t(4942),a=t(3366),r=t(7462),i=t(2791),c=t(8182),l=t(5735),d=t(4419),s=t(2065),u=t(6934),p=t(1402),v=t(7119),h=t(4036),m=t(1217);function f(e){return(0,m.Z)("MuiButton",e)}var x=(0,t(5878).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=i.createContext({}),g=t(184),S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=["root"],z=function(e){return(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},Z=(0,u.ZP)(v.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,o[t.variant],o["".concat(t.variant).concat((0,h.Z)(t.color))],o["size".concat((0,h.Z)(t.size))],o["".concat(t.variant,"Size").concat((0,h.Z)(t.size))],"inherit"===t.color&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})((function(e){var o,t,a,i=e.theme,c=e.ownerState;return(0,r.Z)({},i.typography.button,(o={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((i.vars||i).palette[c.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:(i.vars||i).palette.grey.A100,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(i.vars||i).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[c.color].main}}),"&:active":(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,n.Z)(o,"&.".concat(x.focusVisible),(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,n.Z)(o,"&.".concat(x.disabled),(0,r.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"outlined"===c.variant&&"secondary"===c.color&&{border:"1px solid ".concat((i.vars||i).palette.action.disabled)},"contained"===c.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),o),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat((0,s.Fq)(i.palette[c.color].main,.5))},"contained"===c.variant&&{color:i.vars?i.vars.palette.text.primary:null==(t=(a=i.palette).getContrastText)?void 0:t.call(a,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],boxShadow:(i.vars||i).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].contrastText,backgroundColor:(i.vars||i).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(e){var o;return e.ownerState.disableElevation&&(o={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,n.Z)(o,"&.".concat(x.focusVisible),{boxShadow:"none"}),(0,n.Z)(o,"&:active",{boxShadow:"none"}),(0,n.Z)(o,"&.".concat(x.disabled),{boxShadow:"none"}),o)})),w=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,o){var t=e.ownerState;return[o.startIcon,o["iconSize".concat((0,h.Z)(t.size))]]}})((function(e){var o=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===o.size&&{marginLeft:-2},z(o))})),C=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,o){var t=e.ownerState;return[o.endIcon,o["iconSize".concat((0,h.Z)(t.size))]]}})((function(e){var o=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===o.size&&{marginRight:-2},z(o))})),k=i.forwardRef((function(e,o){var t=i.useContext(b),n=(0,l.Z)(t,e),s=(0,p.Z)({props:n,name:"MuiButton"}),u=s.children,v=s.color,m=void 0===v?"primary":v,x=s.component,z=void 0===x?"button":x,k=s.className,I=s.disabled,M=void 0!==I&&I,R=s.disableElevation,E=void 0!==R&&R,W=s.disableFocusRipple,L=void 0!==W&&W,B=s.endIcon,F=s.focusVisibleClassName,N=s.fullWidth,T=void 0!==N&&N,P=s.size,_=void 0===P?"medium":P,O=s.startIcon,V=s.type,j=s.variant,q=void 0===j?"text":j,A=(0,a.Z)(s,S),D=(0,r.Z)({},s,{color:m,component:z,disabled:M,disableElevation:E,disableFocusRipple:L,fullWidth:T,size:_,type:V,variant:q}),G=function(e){var o=e.color,t=e.disableElevation,n=e.fullWidth,a=e.size,i=e.variant,c=e.classes,l={root:["root",i,"".concat(i).concat((0,h.Z)(o)),"size".concat((0,h.Z)(a)),"".concat(i,"Size").concat((0,h.Z)(a)),"inherit"===o&&"colorInherit",t&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(a))],endIcon:["endIcon","iconSize".concat((0,h.Z)(a))]},s=(0,d.Z)(l,f,c);return(0,r.Z)({},c,s)}(D),Q=G.root,U=(0,a.Z)(G,y),H=O&&(0,g.jsx)(w,{className:U.startIcon,ownerState:D,children:O}),J=B&&(0,g.jsx)(C,{className:U.endIcon,ownerState:D,children:B});return(0,g.jsxs)(Z,(0,r.Z)({ownerState:D,className:(0,c.Z)(t.className,Q,k),component:z,disabled:M,focusRipple:!L,focusVisibleClassName:(0,c.Z)(U.focusVisible,F),ref:o,type:V},A,{classes:U,children:[H,u,J]}))}))},5193:function(e,o,t){var n;t.d(o,{Z:function(){return p}});var a=t(885),r=t(2791),i=t(7301),c=t(3073),l=t(162);function d(e,o,t,n,i){var c="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,d=r.useState((function(){return i&&c?t(e).matches:n?n(e).matches:o})),s=(0,a.Z)(d,2),u=s[0],p=s[1];return(0,l.Z)((function(){var o=!0;if(c){var n=t(e),a=function(){o&&p(n.matches)};return a(),n.addListener(a),function(){o=!1,n.removeListener(a)}}}),[e,t,c]),u}var s=(n||(n=t.t(r,2))).useSyncExternalStore;function u(e,o,t,n){var i=r.useCallback((function(){return o}),[o]),c=r.useMemo((function(){if(null!==n){var o=n(e).matches;return function(){return o}}return i}),[i,e,n]),l=r.useMemo((function(){if(null===t)return[i,function(){return function(){}}];var o=t(e);return[function(){return o.matches},function(e){return o.addListener(e),function(){o.removeListener(e)}}]}),[i,t,e]),d=(0,a.Z)(l,2),u=d[0],p=d[1];return s(p,u,c)}function p(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,i.Z)(),n="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,a=(0,c.Z)({name:"MuiUseMediaQuery",props:o,theme:t}),r=a.defaultMatches,l=void 0!==r&&r,p=a.matchMedia,v=void 0===p?n?window.matchMedia:null:p,h=a.ssrMatchMedia,m=void 0===h?null:h,f=a.noSsr;var x="function"===typeof e?e(t):e;x=x.replace(/^@media( ?)/m,"");var b=void 0!==s?u:d,g=b(x,l,v,m,f);return g}}}]);
//# sourceMappingURL=415.20a97dde.chunk.js.map