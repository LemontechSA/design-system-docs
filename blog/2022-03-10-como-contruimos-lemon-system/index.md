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

Si bien la opción de Style Props es comun en el mundo de las librerías de componentes de Javascript, quisimos optar por la segunda opción de css-in-js con la librería twind para permitir estilizar los componentes con Tailwind. 

Al probar prototipos con Style Props nos dimos cuenta que, si bien, es una forma común de hacer librerías, sorpresivamente, no hay una librería en al comunidad que permita implementarlo facilmente, eso y que además involucraría un gran cambio en la forma de estilizar componentes por parte de los equipos internos de Lemontech nos hicieron decantarnos por la segunda opción.

El hacer una librería basada en Tailwind con twind, es una forma novedosa de hacer una librería de UI, pero estabamos seguros de que iba a ser mejor recibida y por lo mismo iba a hacer más facilmente adoptable por parte de los equipos internos de Lemontech ya que, en su mayoría, estan familiarizados con el trabajar con Tailwind.


## Definición de Bundle

- Webpack
- Rollup
- Esbuild

## Administrador de paquetes

- npm
- yarn
- pnpm

## Repositorio

- Monorepo (turborepo)
- Monolito
