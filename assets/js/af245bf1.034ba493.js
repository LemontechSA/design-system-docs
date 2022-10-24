"use strict";(self.webpackChunksuit_ui_docs=self.webpackChunksuit_ui_docs||[]).push([[877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(a,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905)),i=r(9866);const c={id:"switch",category:"form",title:"Switch",description:"Switch component is used in forms when a user needs to select multiple values from several options."},s=void 0,a={unversionedId:"components/switch",id:"components/switch",title:"Switch",description:"Switch component is used in forms when a user needs to select multiple values from several options.",source:"@site/docs/components/switch.mdx",sourceDirName:"components",slug:"/components/switch",permalink:"/suit-ui-docs/docs/components/switch",draft:!1,tags:[],version:"current",frontMatter:{id:"switch",category:"form",title:"Switch",description:"Switch component is used in forms when a user needs to select multiple values from several options."},sidebar:"tutorialSidebar",previous:{title:"Snackbar",permalink:"/suit-ui-docs/docs/components/snackbar"},next:{title:"Examples",permalink:"/suit-ui-docs/docs/examples"}},l={},p=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Switch } from "lemon-system";\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(i.rs,{label:"Switch",mdxType:"Switch"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Switch label="Switch" />\n')))}m.isMDXComponent=!0}}]);