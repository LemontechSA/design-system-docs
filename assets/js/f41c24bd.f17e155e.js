"use strict";(self.webpackChunksuit_ui_docs=self.webpackChunksuit_ui_docs||[]).push([[922],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>d});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,b=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return t?n.createElement(b,i(i({ref:a},u),{},{components:t})):n.createElement(b,i({ref:a},u))}));function d(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6796:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>k,contentTitle:()=>d,default:()=>g,frontMatter:()=>m,metadata:()=>b,toc:()=>f});var n=t(7462),o=(t(7294),t(3905)),r=t(7775),i=t(6883),s=t(4654),l=t(7574),p=t(7579),u=t(2039),c=t(5170);const m={slug:"how-we-built-it",title:"\xbfC\xf3mo contruimos Suit UI?",authors:["jose","renzo"]},d=void 0,b={permalink:"/suit-ui-docs/blog/how-we-built-it",source:"@site/blog/2022-10-03-como-contruimos-lemon-system/index.mdx",title:"\xbfC\xf3mo contruimos Suit UI?",description:"Para el desarrollo de Suit UI, la librer\xeda de componentes del Design System de Lemontech, hemos tomado distintas decisiones con respecto a implementaciones t\xe9cnicas. En este blog planteamos las diferentes dificultades t\xe9cnicas a las que nos hemos visto enfrentados y el c\xf3mo optamos por solucionarlas.",date:"2022-10-03T00:00:00.000Z",formattedDate:"October 3, 2022",tags:[],readingTime:6.32,hasTruncateMarker:!0,authors:[{name:"Jos\xe9 N\xfa\xf1ez",title:"Suit Design Developer",url:"https://cl.linkedin.com/in/jose-nunez-riveros?trk=public_profile_browsemap",imageURL:"https://avatars.githubusercontent.com/u/79015124?v=4",key:"jose"},{name:"Renzo Talenta",title:"Suit Design Developer",url:"https://pe.linkedin.com/in/renzotev",imageURL:"https://avatars.githubusercontent.com/u/13630376?s=48&v=4",key:"renzo"}],frontMatter:{slug:"how-we-built-it",title:"\xbfC\xf3mo contruimos Suit UI?",authors:["jose","renzo"]},prevItem:{title:"\xa1Te damos la bienvenida a nuestro primer newsletter!",permalink:"/suit-ui-docs/blog/first-newsletter"}},k={authorsImageUrls:[void 0,void 0]},f=[{value:"Enfoque",id:"enfoque",level:2},{value:"Definici\xf3n de Bundle",id:"definici\xf3n-de-bundle",level:2},{value:"Administrador de paquetes",id:"administrador-de-paquetes",level:2},{value:"Repositorio",id:"repositorio",level:2}],h={toc:f};function g(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"Para el desarrollo de ",(0,o.kt)("strong",{parentName:"p"},"Suit UI"),", la librer\xeda de componentes del Design System de ",(0,o.kt)("a",{parentName:"p",href:"https://www.lemontech.com"},"Lemontech"),", hemos tomado distintas decisiones con respecto a implementaciones t\xe9cnicas. En este blog planteamos las diferentes dificultades t\xe9cnicas a las que nos hemos visto enfrentados y el c\xf3mo optamos por solucionarlas."),(0,o.kt)("br",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udea7 Suit UI sigue en desarrollo, debido a esto puede que algunos elementos escritos aqu\xed con el tiempo cambien o est\xe9n desactualizados.")),(0,o.kt)("br",null),(0,o.kt)("h1",{id:"requerimientos"},"Requerimientos"),(0,o.kt)("p",null,"Los siguientes requerimientos fueron planteados para Suit UI:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Debe ser consistente con el Design System de Lemontech."),(0,o.kt)("li",{parentName:"ul"},"Debe ser facilmente adaptable en los equipos de Lemontech."),(0,o.kt)("li",{parentName:"ul"},"No debe generar mayores inconvenientes al ser implementado en nuevas o en ya creadas aplicaciones.")),(0,o.kt)("h1",{id:"decisiones-de-implementaci\xf3n"},"Decisiones de implementaci\xf3n"),(0,o.kt)("h2",{id:"enfoque"},"Enfoque"),(0,o.kt)("br",null),(0,o.kt)(r.xu,{className:"flex flex-col items-center",mdxType:"Box"},(0,o.kt)("img",{src:i.Z,width:"500",alt:"Categorias de las Librer\xedas UI"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Categorias de Librer\xedas UI."))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Podemos dividir las librer\xedas de componentes en tres grandes categor\xedas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CSS++"),": Librer\xedas que solo entregan un CSS potenciado."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Style Systems"),": Librer\xedas que solo brindan estilos."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Behavior Libraries"),": Librer\xedas que solo ofrecen un manejo del comportamiento.")),(0,o.kt)("p",null,"Tambi\xe9n existen librer\xedas que estan entre las intersecciones de estas categor\xedas y que a\xf1aden un conjunto de funcionalidades."),(0,o.kt)("p",null,"Con Suit UI quer\xedamos que el ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/swlh/what-is-dx-developer-experience-401a0e44a9d9"},"DX")," (exp. del desarrollador) fuera igual o mejor que trabajando con",(0,o.kt)("a",{parentName:"p",href:"https://mui.com"},"MUI"),", ",(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com"},"Chakra UI")," y ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev"},"Mantine"),". Por lo tanto, implementamos la misma flexibilidad que estos tienen al ser part\xedcipe de las 3 categor\xedas mencionadas."),(0,o.kt)("br",null),(0,o.kt)(r.xu,{className:"flex flex-col items-center",mdxType:"Box"},(0,o.kt)("img",{src:s.Z,width:"350",alt:"Sub-categorias de librer\xedas UI"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Sub-categorias de librer\xedas UI."))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Para que Suit UI fuese facilmente adoptable, era necesario que su estilizaci\xf3n no fuese compleja y que no se tuviese que lograr hacer con CSS StyleSheets."),(0,o.kt)("p",null,"Es por este motivo que decidimos que la estilizaci\xf3n fuese con clases de ",(0,o.kt)("a",{parentName:"p",href:"https://tailwindcss.com"},"Tailwind CSS"),", que era algo que, en algunos equipos de Lemontech, ya estaba siendo aplicado y les facilitiba el desarrollo."),(0,o.kt)("p",null,"En Chakra UI, MUI y Mantine la estilizaci\xf3n es mediante ",(0,o.kt)("strong",{parentName:"p"},"Style Props")," (estilos como propiedad) y/o usando la convenci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"sx"),", usando e inspirandose en librer\xedas como ",(0,o.kt)("a",{parentName:"p",href:"https://styled-system.com"},"Styled System")," y ",(0,o.kt)("a",{parentName:"p",href:"https://theme-ui.com"},"Theme UI"),"."),(0,o.kt)("br",null),(0,o.kt)(r.xu,{className:"flex flex-col items-center",mdxType:"Box"},(0,o.kt)("img",{src:l.Z,width:"500",alt:"Las 3 formas de estilizar un componente."})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Este enfoque de crear una librer\xeda la cual, aparte de brindar estilos y comportamiento, se pudiese estilizar con Tailwind CSS es novedoso y no ten\xedamos precedentes en los cuales inspirarnos."),(0,o.kt)("p",null,"Por lo cual investigamos su factibilidad t\xe9cnica, probando las tres siguientes opciones como librer\xeda base de Suit UI:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tailwindcss.com"},"Tailwind CSS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ben-rogerson/twin.macro"},"Twin.macro")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twind.dev"},"Twind"))),(0,o.kt)("p",null,"Lo primero que uno se puede preguntar es: \xbfpor qu\xe9 no usar Tailwind CSS en Suit UI? Ser\xeda la opci\xf3n ideal, pero no es algo factible de poder realizarse."),(0,o.kt)("p",null,"Tailwind CSS funciona con los post-procesador de CSS: ",(0,o.kt)("a",{parentName:"p",href:"https://autoprefixer.github.io"},"Autoprefixer")," y ",(0,o.kt)("a",{parentName:"p",href:"https://purgecss.com"},"PurgeCSS"),", estos en conjunto pueden inyectar CSS a un fichero CSS StyleSheet para estilizar los componentes con clases de Tailwind CSS."),(0,o.kt)("p",null,"Debido a lo anterior, es que usando Tailwind CSS no se le podr\xeda encargar a Suit UI la responsabilidad de configurar Tailwind CSS, sino que esta es traspasada al que implementa la librer\xeda en su aplicaci\xf3n, y lo mismo pasar\xeda con respecto a su configuraci\xf3n, que depender\xeda del framework que est\xe9 ocupando (create-react-app, Next.js, Vite, etc...)"),(0,o.kt)("p",null,"Otro punto a considerar es en el ambiente desarrollo de Suit UI. Para que fuese posible desarrollar con Tailwind CSS se tendr\xeda que implementar una configuraci\xf3n en la empaquetaci\xf3n del c\xf3digo fuente para poder usarse junto con Storybook, luego, crear otra configuraci\xf3n en la empaquetaci\xf3n para el bundle que ser\xeda distribuido en npm y, por \xfaltimo, se tendr\xeda que tener en cuenta el purge al implementar la librer\xeda en alguna app."),(0,o.kt)("p",null,"El conjunto de estas problem\xe1ticas nos hizo decantarnos por las opciones de Tailwind css-in-js probando Twind y Twin.macro."),(0,o.kt)("br",null),(0,o.kt)(r.xu,{className:"flex flex-col items-center",mdxType:"Box"},(0,o.kt)("img",{src:u.Z,width:"600",alt:"Comparaci\xf3n entre Twin.macro y Twind"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Comparaci\xf3n entre Twin.macro y Twind."))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Twin.macro")," es una librer\xeda que funciona con una ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/babel-plugin-macros"},"Macro")," de Babel que permite estilizar componentes css-in-js usando clases de Tailwdin CSS y cuya transformaci\xf3n es hecha en la compilaci\xf3n."),(0,o.kt)("p",null,"Esta alternativa, si bien es interesante para ser implementada en aplicaciones, no lo es tanto para librer\xedas. Si se implementa en una librer\xeda, como en Suit UI, y luego esta es instalada en una app, como la transformaci\xf3n de Babel es en build time, la estilizaci\xf3n con clases de Tailwind CSS que se haga en los componentes no se ver\xedan reflejados en la app."),(0,o.kt)("p",null,"En ",(0,o.kt)("strong",{parentName:"p"},"Twind")," es diferente, no es necesario una compilaci\xf3n previa y en comparaci\xf3n de otras librer\xedas css-in-js su inyecci\xf3n de CSS es ",(0,o.kt)("a",{parentName:"p",href:"https://twind.dev/handbook/introduction.html#benchmarks"},"m\xe1s \xf3ptima"),". Por lo que usar Twind como librer\xeda base para Suit UI ser\xeda lo m\xe1s sencillo y \xf3ptimo, y es por lo cual optamos por utilizarla."),(0,o.kt)(r.zx,{className:"uppercase p-10",onClick:()=>alert("Made with Twind! \ud83d\ude03"),mdxType:"Button"},"Press me!"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Button } from "suit-ui";\n\n<Button className="uppercase p-10">Press me!</Button>;\n')),(0,o.kt)("h2",{id:"definici\xf3n-de-bundle"},"Definici\xf3n de Bundle"),(0,o.kt)("br",null),(0,o.kt)(r.xu,{className:"flex flex-col items-center",mdxType:"Box"},(0,o.kt)("img",{src:p.Z,width:"600",alt:"ESBuild benchmark"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Benchmark ",(0,o.kt)("a",{parentName:"em",href:"https://esbuild.github.io"},"https://esbuild.github.io")))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Para empaquetar el c\xf3digo fuente y poder distribuir la librer\xeda en npm ten\xedamos diferentes opciones:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://webpack.js.org"},"Webpack")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollupjs.org/guide/en"},"Rollup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://esbuild.github.io"},"Esbuild"))),(0,o.kt)("p",null,"Webpack es la soluci\xf3n m\xe1s com\xfan en la actualidad para empaquetar aplicaciones web, pero de poco ESBuild y Rollup han ido tomando m\xe1s espacio por su mayor eficiencia de empaquetaci\xf3n y su simplicidad al ser configurados."),(0,o.kt)("p",null,"En comparaci\xf3n con Rollup y Webpack, la alternativa de Esbuild viene listo, desde su instalaci\xf3n, para empaquetar jsx y typescript sin necesidad de configurar nada y adem\xe1s de que su rapidez para empaquetar las apps es mucho mayor que las dos alternativas previas hizo que nos decant\xe1ramos por esta opci\xf3n."),(0,o.kt)("h2",{id:"administrador-de-paquetes"},"Administrador de paquetes"),(0,o.kt)("br",null),(0,o.kt)(r.xu,{className:"flex flex-col items-center",mdxType:"Box"},(0,o.kt)("img",{src:c.Z,width:"600",alt:"Packages benchmark"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Benchmark ",(0,o.kt)("a",{parentName:"em",href:"https://pnpm.io/benchmarks"},"https://pnpm.io/benchmarks"),"."))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Como administrador de librer\xedas se tomaron en cuenta las siguientes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com"},"Npm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com"},"Yarn")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pnpm.io/es"},"Pnpm"))),(0,o.kt)("p",null,"Uno de los principios t\xe9cnicos por lo que nos guiamos para la construcci\xf3n de Suit UI fue la simplicidad, el evitar implementaciones que no contuviesen mayores beneficios."),(0,o.kt)("p",null,"Con respecto a Yarn, si bien, sol\xeda optarse debido a que era m\xe1s r\xe1pido como administrador de paquetes que npm. En la actualidad no hay gran diferencia entre estas, y a\xf1adiendo el hecho de que Yarn sea externo a Node y no viniese con este instalado como si lo hace Npm es por lo cual que lo descartamos como administradorr de paquetes."),(0,o.kt)("p",null,"Pnpm nos ofrec\xeda una mayor eficiencia que Npm pero nos encontramos con problemas de compatibilidad con otras librer\xedas debido a su forma de organizar ",(0,o.kt)("em",{parentName:"p"},"node_modules"),"."),(0,o.kt)("p",null,"Luego de haber probado las diferentes opciones, decidimos usar npm."),(0,o.kt)("h2",{id:"repositorio"},"Repositorio"),(0,o.kt)("p",null,"Para organizar el repositorio se evaluaron dos opciones:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Monorepo multipaquete usando ",(0,o.kt)("em",{parentName:"li"},"turborepo")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rtelenta/test-monorepo-design-system"},"Repositorio de pruebas")),(0,o.kt)("li",{parentName:"ul"},"Unica librer\xeda ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/josiext/react-library-esbuild"},"Repositorio de pruebas"))),(0,o.kt)("p",null,"Elegimos tener una ",(0,o.kt)("em",{parentName:"p"},"unica librer\xeda")," debido a lo simple que es de mantener y al tama\xf1o del proyecto actualmente. Por otro lado si bien un ",(0,o.kt)("em",{parentName:"p"},"monorepo multipaquete")," ofrece ventajas a nivel de organizaci\xf3n de paquetes y ayuda a evitar problemas entre las dependencias, el setup y el proceso de publicaci\xf3n es complejo."),(0,o.kt)("p",null,"Por estas razones creemos que un ",(0,o.kt)("em",{parentName:"p"},"monorepo multipaquete")," es una buena opci\xf3n cuando el proyecto es muy grande, debido a lo f\xe1cil de su organizaci\xf3n. No se descarta optar por esta opci\xf3n en un futuro."))}g.isMDXComponent=!0},7574:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/code-comparation-91cf60ce8a08cbef432866e3ae20edae.png"},7579:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/esbuild-comparation-036e7957bf72ae4404b08a54cf545b7c.png"},4654:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/librarie-subcategories-fc0363a5b475a5fdfcc5c6212fe0606b.png"},5170:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/packages-comparation-ef2026a6804528eefa586fbf10d48c66.png"},2039:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/twind-twin-comparation-2b207fa524f9b6c2b0c8d1fcb69e30aa.png"},6883:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/ui-libraries-2555b1b65800710c38c93d6f359a76d7.png"}}]);