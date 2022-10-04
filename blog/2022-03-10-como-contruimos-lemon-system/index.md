---
slug: how-we-built-it
title: ¿Cómo contruimos Lemon System?
authors: [jose, renzo]
---

Para definir y desarrollar la librería UI de React de Lemon System hemos tomado diferentes decisiones técnicas. En este blog planteamos las dificultades a las que nos vimos enfrentados y el cómo y por qué optamos por solucionarlas.

<!--truncate-->

> 🚧 La librería sigue en desarrollo así que pueden cambiar algunas cosas escritas aquí con el tiempo.


# Requerimientos

Los siguientes requerimientos fueron planteados para la librería UI del Design System de Lemontech:

- Debe ser consistente con el Design System.
- Debe ser facilmente adaptable en los equipos de Lemontech, considerando la conformación de estos en su mayoría por ingenieros Full-Stacks.
- No debe crear mayores inconvenientes al implementarla en nuevas o en antiguas aplicaciones ya creadas.

# Decisiones de implementación 

## Estilos

Dos formas de implementar la estilización de los componentes

- Style Props (style-system, xstyled, theme-ui)
- Tailwind como css-in-js (twind, twin.macro)

Si bien la opción de Style Props es comun en las librerías de componentes de Javascript, quisimos optar por la opción de css-in-js usando Twind para permitir a los desarrolladores estilizar los componentes con Tailwind. 

Al probar prototipos con diferentes librerías de Style Props nos dimos cuenta que, si bien, es una forma común de hacer librerías, sorpresivamente, no hay librería en al comunidad que permita implementarlo facilmente, eso y que además involucraría un gran cambio en la forma de estilizar componentes por parte de los equipos internos de Lemontech nos hizo decantarnos por la segunda opción.

El hacer una librería basada en Tailwind con twind, es una forma novedosa de hacer una librería de UI, pero estabamos seguro que tendría un mejor recibimiento por parte de los desarrolladores internos y por lo mismo iba a hacer más facil la adopción de este por parte de los equipos de Lemontech ya que, en su mayoría, ya estan familiarizados con usar Tailwind.

## Definición de Bundle

Para empaquetar el codigo fuente y poder distribuir la librería en npm teniamos varías opciones.

- Webpack
- Rollup
- Esbuild

Uno de los principios que tomamos al optar por soluciones son la simplicidad y la eficienca. 

Webpack es la solución más comun actualmente para las aplicaciones web, lo usa **create-react-app** y **next.js** (por el momento) sin embargo la libertad que da para ser configurado complejiza su implementación en una librería donde debe ser configurado de cero y por otro lado, no es el empaquetador más rapido por lo que la agilidad de deploy se vería afectado. 

Rollup y Esbuild son dos soluciones más contemporaneas que webpack, ambas su implementación son más sencillas y directas, sin embargo, por lejos la eficiencia en el tiempo de empaquetado que nos da Esbuild que por detras usa Rust es un   

![Esbuild comparation](./esbuild-comparation.png)

## Administrador de paquetes

- npm
- yarn
- pnpm

## Repositorio

- Monorepo (turborepo)
- Monolito
