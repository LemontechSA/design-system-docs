"use strict";(self.webpackChunksuit_ui_docs=self.webpackChunksuit_ui_docs||[]).push([[8395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3991:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={slug:"how-we-built-it",title:"\xbfC\xf3mo contruimos Suit UI?",authors:["jose","renzo"]},a=void 0,s={permalink:"/suit-ui-docs/blog/how-we-built-it",source:"@site/blog/2022-10-03-como-contruimos-lemon-system/index.mdx",title:"\xbfC\xf3mo contruimos Suit UI?",description:"Para el desarrollo de Suit UI, la librer\xeda de componentes del Design System de Lemontech, hemos tomado distintas decisiones con respecto a implementaciones t\xe9cnicas. En este blog planteamos las diferentes dificultades t\xe9cnicas a las que nos hemos visto enfrentados y el c\xf3mo optamos por solucionarlas.",date:"2022-10-03T00:00:00.000Z",formattedDate:"October 3, 2022",tags:[],readingTime:6.325,hasTruncateMarker:!0,authors:[{name:"Jos\xe9 N\xfa\xf1ez",title:"Suit Design Developer",url:"https://cl.linkedin.com/in/jose-nunez-riveros?trk=public_profile_browsemap",imageURL:"https://avatars.githubusercontent.com/u/79015124?v=4",key:"jose"},{name:"Renzo Talenta",title:"Suit Design Developer",url:"https://pe.linkedin.com/in/renzotev",imageURL:"https://avatars.githubusercontent.com/u/13630376?s=48&v=4",key:"renzo"}],frontMatter:{slug:"how-we-built-it",title:"\xbfC\xf3mo contruimos Suit UI?",authors:["jose","renzo"]},prevItem:{title:"\xa1Te damos la bienvenida a nuestro primer newsletter!",permalink:"/suit-ui-docs/blog/first-newsletter"}},c={authorsImageUrls:[void 0,void 0]},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0}}]);