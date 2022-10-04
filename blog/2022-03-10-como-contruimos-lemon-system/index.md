---
slug: how-we-built-it
title: ¿Cómo contruimos Lemon System?
authors: [jose, renzo]
---

Para el desarrollo de Lemon System, la librería UI del design system de Lemontech, hemos tomado diferentes decisiones en lo que respecta a implementaciones técnicas. En este blog planteamos las dificultades técnicas a las que nos vimos enfrentados y el cómo y por qué optamos por solucionarlas.

<!--truncate-->

> 🚧 La librería sigue en desarrollo, debido a esto puede que algunos topicos escritos aquí con el tiempo cambien o esten desactualizados.


# Requerimientos

Los siguientes requerimientos fueron planteados para Lemon System:

- Debe ser consistente con el Design System de Lemontech.
- Debe ser facilmente adaptable en los equipos de Lemontech, considerando la conformación de estos en su mayoría por ingenieros Full-Stacks.
- No debe crear mayores inconvenientes al implementarla en nuevas o en aplicaciones ya creadas.

# Decisiones de implementación 

## Estilos

Investigamos dos formas viables de implementar la estilización de los componentes:

- Style Props (style-system, xstyled, theme-ui)
- Tailwind como css-in-js (twind, twin.macro)

Si bien la opción de Style Props es comun en las librerías de componentes de Javascript, quisimos optar por la opción de css-in-js usando Twind para permitir a los desarrolladores estilizar los componentes con Tailwind mediante clases. 

Al probar prototipos con diferentes librerías de Style Props nos dimos cuenta que, si bien, es una forma común de hacer librerías, sorpresivamente, no hay librería en al comunidad open source que permita implementarlo facilmente, eso y que además involucraría que los equipos tuviesen que tener un mayor conocimiento en CSS es por lo cual nos decantamos por la opción de estilizar como Tailwind.

El hacer una librería basada en Tailwind con Twind, es una forma novedosa e interesante de hacer una librería de UI ya que permitiría a los usuarios estilizar los componentes de Lemon System tal como si hubiesen instalado Tailwind en sus aplicaciones y estuviesen estilizando sus propios componentes haciendo que tuviese un mejor recibimiento por parte de los desarrolladores internos y una mejor familiarización por parte de los equipos que ya usan Tailwind en sus aplicaciones frontends.

## Definición de Bundle

Para empaquetar el codigo fuente y poder distribuir la librería en npm teniamos diferentes opciones:

- Webpack
- Rollup
- Esbuild

Uno de los principios que tomamos al optar por soluciones son la simplicidad y la eficienca. 

Webpack es la solución más comun actualmente para las aplicaciones web, lo usa **create-react-app** y **next.js** (por el momento) sin embargo la libertad que da para ser configurado complejiza su implementación en una librería donde debe ser configurado de cero, por otro lado, no es el empaquetador más rapido por lo que la agilidad del deploy del proyecto se vería afectado. 

Rollup y Esbuild son dos soluciones más contemporaneas que webpack, en ambas su implementación es más sencilla y directa, sin embargo, por lejos, era mucho mayor la eficiencia en el tiempo de empaquetado que nos daba Esbuild, que por detras usa el lenguaje Go y compila a lenguaje maquina.

 ![Esbuild comparation](./esbuild-comparation.png)
*Benchmark https://esbuild.github.io*

## Administrador de paquetes

Como administrador de librerías se tomaron en cuenta las siguientes:

- npm
- yarn
- pnpm

Uno de los principios técnicos por lo que nos guiamos para la contrucción de Lemon System fue la simplicidad, el evitar implementaciónes que no contuviesen mayores beneficios.

Con respecto a Yarn, si bien, tiempo atras, era optada por usarse en vez de npm debido a que era más eficiente como administrador de paquetes, actualmente no hay gran diferencía entre estas, y sumandole el hecho de que yarn sea algo externo a Node y no viniese con este instalado como si lo hace npm es por lo cual que lo descartamos.

Pnpm nos ofrecia una mayor eficiencia que npm, pero decidimos optar por esta ultima sin embargo, esto debido a que con pnpm nos encontramos con problemas de compatibilidad con otras librerías debido a su forma de organizar *node_modules*.

 ![Esbuild comparation](./packages-comparation.png)
 *Benchmark https://pnpm.io/benchmarks*


## Repositorio

- Monorepo (turborepo)
- Monolito
