"use strict";(self.webpackChunksuit_ui_docs=self.webpackChunksuit_ui_docs||[]).push([[436],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(b,i(i({ref:a},c),{},{components:t})):n.createElement(b,i({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7406:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>k,contentTitle:()=>d,default:()=>g,frontMatter:()=>m,metadata:()=>b,toc:()=>f});var n=t(7462),r=(t(7294),t(3905)),o=t(9866),i=t(2735),s=t(9351),l=t(3230),p=t(7415),c=t(2313),u=t(93);const m={slug:"how-we-built-it",title:"\xbfC\xf3mo contruimos Suit UI?",authors:["jose","renzo"]},d=void 0,b={permalink:"/suit-ui-docs/blog/how-we-built-it",source:"@site/blog/2022-03-10-como-contruimos-lemon-system/index.mdx",title:"\xbfC\xf3mo contruimos Suit UI?",description:"Para el desarrollo de Suit UI, la librer\xeda de componentes del Design System de Lemontech, hemos tomado diferentes decisiones con respecto a implementaciones t\xe9cnicas. En este blog planteamos las diferentes dificultades t\xe9cnicas a las que nos hemos vistos enfrentados y el c\xf3mo optamos por solucionarlas.",date:"2022-03-10T00:00:00.000Z",formattedDate:"March 10, 2022",tags:[],readingTime:6.02,hasTruncateMarker:!0,authors:[{name:"Jos\xe9 N\xfa\xf1ez",title:"Lemon System Co-Creator",url:"https://github.com/josiext",imageURL:"https://avatars.githubusercontent.com/u/79015124?v=4",key:"jose"},{name:"Renzo Talenta",title:"Lemon System Co-Creator",url:"https://github.com/rtelenta",imageURL:"https://avatars.githubusercontent.com/u/13630376?s=48&v=4",key:"renzo"}],frontMatter:{slug:"how-we-built-it",title:"\xbfC\xf3mo contruimos Suit UI?",authors:["jose","renzo"]}},k={authorsImageUrls:[void 0,void 0]},f=[{value:"Enfoque",id:"enfoque",level:2},{value:"Definici\xf3n de Bundle",id:"definici\xf3n-de-bundle",level:2},{value:"Administrador de paquetes",id:"administrador-de-paquetes",level:2},{value:"Repositorio",id:"repositorio",level:2}],h={toc:f};function g(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Para el desarrollo de ",(0,r.kt)("strong",{parentName:"p"},"Suit UI"),", la librer\xeda de componentes del Design System de ",(0,r.kt)("a",{parentName:"p",href:"https://www.lemontech.com"},"Lemontech"),", hemos tomado diferentes decisiones con respecto a implementaciones t\xe9cnicas. En este blog planteamos las diferentes dificultades t\xe9cnicas a las que nos hemos vistos enfrentados y el c\xf3mo optamos por solucionarlas."),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udea7 Suit UI sigue en desarrollo, debido a esto puede que algunos elementos escritos aqu\xed con el tiempo cambien o esten desactualizados.")),(0,r.kt)("br",null),(0,r.kt)("h1",{id:"requerimientos"},"Requerimientos"),(0,r.kt)("p",null,"Los siguientes requerimientos fueron planteados para Suit UI:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Debe ser consistente con el Design System de Lemontech."),(0,r.kt)("li",{parentName:"ul"},"Debe ser facilmente adaptable en los equipos de Lemontech."),(0,r.kt)("li",{parentName:"ul"},"No debe crear mayores inconvenientes al ser implemenado en nuevas o en ya creadas aplicaciones.")),(0,r.kt)("h1",{id:"decisiones-de-implementaci\xf3n"},"Decisiones de implementaci\xf3n"),(0,r.kt)("h2",{id:"enfoque"},"Enfoque"),(0,r.kt)("br",null),(0,r.kt)(o.xu,{className:"flex flex-col items-center",mdxType:"Box"},(0,r.kt)("img",{src:i.Z,width:"500",alt:"Categorias de las Librer\xedas UI"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Categorias de Librer\xedas UI."))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Existen variados enfoques para definir una librer\xeda de interfaces, las cuales podemos dividir en tres grandes categor\xedas: ",(0,r.kt)("strong",{parentName:"p"},"CSS++")," (Librer\xedas que solo entregan un CSS potenciado), ",(0,r.kt)("strong",{parentName:"p"},"Style Systems")," (librer\xedas que solamente brindan estilos) y ",(0,r.kt)("strong",{parentName:"p"},"Behavior Libraries")," (librer\xedas que solo ofrecen un manejo del comportamiento). Tambi\xe9n existen librer\xedas que estan entre las intersecciones de estas categor\xedas y que a\xf1aden un conjunto de funcionalidades."),(0,r.kt)("p",null,"La mejor opci\xf3n para que Suit UI tuviese una consistencia con el Design System y que adem\xe1s brindar\xe1 una mejor ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/swlh/what-is-dx-developer-experience-401a0e44a9d9"},"experiencia de desarrollo (DX)")," y, por lo mismo, una mejor adaptabilidad era optar por desarrollar la librer\xeda cubriendo las 3 categor\xedas mencionadas, tal como lo hacen ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com"},"MUI"),", ",(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com"},"Chakra UI")," y ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev"},"Mantine"),"."),(0,r.kt)("br",null),(0,r.kt)(o.xu,{className:"flex flex-col items-center",mdxType:"Box"},(0,r.kt)("img",{src:s.Z,width:"350",alt:"Sub-categorias de librer\xedas UI"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sub-categorias de librer\xedas UI."))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Para que la librer\xeda fuese facilmente adoptable era necesario que su estilizaci\xf3n no fuese compleja y preferiblemente que no se tuviese que crear CSS StyleSheets sino que fuese simplemente con clases de ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com"},"Tailwind CSS"),", que era algo, que en ciertos equipos, ya estaba siendo aplicado y les facilitiba el desarrollo."),(0,r.kt)("p",null,"En Chakra UI, MUI y Mantine la estilizaci\xf3n es mediante ",(0,r.kt)("strong",{parentName:"p"},"Style Props")," (estilos como propiedad) y/o usando la convenci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"sx"),", usando e inspirandose en librer\xedas como ",(0,r.kt)("a",{parentName:"p",href:"https://styled-system.com"},"Styled System")," y ",(0,r.kt)("a",{parentName:"p",href:"https://theme-ui.com"},"Theme UI"),"."),(0,r.kt)("br",null),(0,r.kt)(o.xu,{className:"flex flex-col items-center",mdxType:"Box"},(0,r.kt)("img",{src:l.Z,width:"500",alt:"Las 3 formas de estilizar un componente."})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Este enfoque de crear una librer\xeda la cual, aparte de brindar estilos y comportamiento, se pudiese estilizar con Tailwind CSS es novedoso y no teniamos presedentes en los cuales inspirarnos, por lo cual investigamos su factibilidad t\xe9cnica probando usar las tres siguientes opciones como librer\xeda base de Suit UI:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tailwindcss.com"},"Tailwind CSS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ben-rogerson/twin.macro"},"Twin.macro")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twind.dev"},"Twind"))),(0,r.kt)("p",null,"Lo primero que se puede pensar es: \xbfpor qu\xe9 no usar simplemente Tailwind CSS en Suit UI? Y, en verdad, ser\xeda la opci\xf3n ideal pero que lastimamente no es algo factible de hacer."),(0,r.kt)("p",null,"Tailwind CSS en una aplicaci\xf3n de React funciona con los post-procesador de CSS: ",(0,r.kt)("a",{parentName:"p",href:"https://autoprefixer.github.io"},"Autoprefixer")," y ",(0,r.kt)("a",{parentName:"p",href:"https://purgecss.com"},"PurgeCSS"),", estos en conjunto pueden inyectar CSS a un fichero CSS StyleSheet para estilizar los componentes con clases de Tailwind CSS."),(0,r.kt)("p",null,"La principal complicaci\xf3n t\xe9cnica que tiene el implementar Tailwind CSS en la librer\xeda directamente es que es imperioso para Tailwind inyectar CSS en un CSS StyleSheet y debido a este proceso es que ya no se le podr\xeda encargar a Suit UI la responsabilidad de configurar Tailwind CSS sino que esta es traspasada al que implementa la librer\xeda en su aplicaci\xf3n, y lo mismo pasar\xeda con respecto a su configuraci\xf3n, que depender\xeda del framework que est\xe9 ocupando (create-react-app, Next.js, Vite, etc...)."),(0,r.kt)("p",null,"Otro punto a considerar es en el ambiente desarrollo de Suit UI, en este, para que fuese posible desarrollar con Tailwind CSS se tendr\xeda que implementar una configuraci\xf3n en la empaquetaci\xf3n del c\xf3digo fuente para poder userse junto con Storybook, luego, crear otra configuraci\xf3n en la empaquetaci\xf3n para el bundle que ser\xeda distribuido en npm y, por \xfaltimo, se tendr\xeda que tener en cuenta tambi\xe9n el purge al implementar la librer\xeda en alguna app."),(0,r.kt)("p",null,"El conjunto de estas problematicos nos hizo decantarnos por las opciones de Tailwind css-in-js probando Twind y Twin.macro."),(0,r.kt)("br",null),(0,r.kt)(o.xu,{className:"flex flex-col items-center",mdxType:"Box"},(0,r.kt)("img",{src:c.Z,width:"600",alt:"Comparaci\xf3n entre Twin.macro y Twind"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Comparaci\xf3n entre Twin.macro y Twind."))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Twin.macro")," es una librer\xeda que funciona con una ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/babel-plugin-macros"},"Macro")," de Babel que permite estilizar componentes css-in-js usando clases de Tailwdin CSS y cuya transformaci\xf3n es hecha en la compilaci\xf3n."),(0,r.kt)("p",null,"Esta alternativa si bien es interesante para ser implementada en aplicaciones no lo es tanto para librer\xedas. Si se implementa en una librer\xeda, como en Suit UI, y luego esta es instalada en una app, como la transformaci\xf3n de Babel es en build time, la estilizaci\xf3n con clases de Tailwind CSS que se haga en los componentes no se ver\xedan reflejados en la app."),(0,r.kt)("p",null,"En ",(0,r.kt)("strong",{parentName:"p"},"Twind")," es diferente, no es necesario una compilaci\xf3n previa y en comparaci\xf3n de otras librer\xedas css-in-js su inyecci\xf3n de CSS es ",(0,r.kt)("a",{parentName:"p",href:"https://twind.dev/handbook/introduction.html#benchmarks"},"m\xe1s optima"),". Por lo que usar Twind como librer\xeda base para Suit UI ser\xeda lo m\xe1s sencillo y optimo, y es por lo cual optamos por utilizarla."),(0,r.kt)(o.zx,{className:"uppercase p-10",onClick:()=>alert("Made with Twind! \ud83d\ude03"),mdxType:"Button"},"Press me!"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { Button } from "lemon-system";\n\n<Button className="uppercase p-10">Press me!</Button>;\n')),(0,r.kt)("h2",{id:"definici\xf3n-de-bundle"},"Definici\xf3n de Bundle"),(0,r.kt)("br",null),(0,r.kt)(o.xu,{className:"flex flex-col items-center",mdxType:"Box"},(0,r.kt)("img",{src:p.Z,width:"600",alt:"ESBuild benchmark"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Benchmark ",(0,r.kt)("a",{parentName:"em",href:"https://esbuild.github.io"},"https://esbuild.github.io")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Para empaquetar el codigo fuente y poder distribuir la librer\xeda en npm teniamos diferentes opciones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://webpack.js.org"},"Webpack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rollupjs.org/guide/en"},"Rollup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://esbuild.github.io"},"Esbuild"))),(0,r.kt)("p",null,"Webpack es la soluci\xf3n m\xe1s comun actualmente para empaquetar aplicaciones web pero de apoco ESBuild y Rollup han ido tomando m\xe1s espacio por su mayor eficiencia de empaquetaci\xf3n y su simplicidad al ser configurados."),(0,r.kt)("p",null,"En comparaci\xf3n con Rollup y Webpack, la alternativa de Esbuild viene listo, desde su instalaci\xf3n, para empaquetar jsx y typescript sin necesidad de configurar nada y adem\xe1s de que su rapidez para empaquetar las apps es mucho mayor que las dos alternativas previas hizo que nos decantaramos por esta opci\xf3n."),(0,r.kt)("h2",{id:"administrador-de-paquetes"},"Administrador de paquetes"),(0,r.kt)("br",null),(0,r.kt)(o.xu,{className:"flex flex-col items-center",mdxType:"Box"},(0,r.kt)("img",{src:u.Z,width:"600",alt:"Packages benchmark"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Benchmark ",(0,r.kt)("a",{parentName:"em",href:"https://pnpm.io/benchmarks"},"https://pnpm.io/benchmarks"),"."))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Como administrador de librer\xedas se tomaron en cuenta las siguientes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com"},"Npm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com"},"Yarn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pnpm.io/es"},"Pnpm"))),(0,r.kt)("p",null,"Uno de los principios t\xe9cnicos por lo que nos guiamos para la contrucci\xf3n de Suit UI fue la simplicidad, el evitar implementaci\xf3nes que no contuviesen mayores beneficios."),(0,r.kt)("p",null,"Con respecto a Yarn, si bien, solia optarse debido a que era m\xe1s rapido como administrador de paquetes que npm. Actualmente no hay gran diferenc\xeda entre estas, y a\xf1adiendo el hecho de que yarn sea externo a Node y no viniese con este instalado como si lo hace npm es por lo cual que lo descartamos como adminstrador de paquetes."),(0,r.kt)("p",null,"Pnpm nos ofrecia una mayor eficiencia que npm pero nos encontramos con problemas de compatibilidad con otras librer\xedas debido a su forma de organizar ",(0,r.kt)("em",{parentName:"p"},"node_modules"),"."),(0,r.kt)("p",null,"Luego de haber probado las diferentes opciones, decidimos usar npm."),(0,r.kt)("h2",{id:"repositorio"},"Repositorio"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Monorepo (turborepo)"),(0,r.kt)("li",{parentName:"ul"},"Monolito")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"En contrucci\xf3n...")))}g.isMDXComponent=!0},3230:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/code-comparation-91cf60ce8a08cbef432866e3ae20edae.png"},7415:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/esbuild-comparation-036e7957bf72ae4404b08a54cf545b7c.png"},9351:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/librarie-subcategories-3a9bebb9338b6bbc953a91503a2169a8.png"},93:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/packages-comparation-ef2026a6804528eefa586fbf10d48c66.png"},2313:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/twind-twin-comparation-2b207fa524f9b6c2b0c8d1fcb69e30aa.png"},2735:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/ui-libraries-239319149e0a58618272e09b24523f0b.png"}}]);