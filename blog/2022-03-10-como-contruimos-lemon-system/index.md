---
slug: how-we-built-it
title: ¿Cómo contruimos Lemon System?
authors: [jose, renzo]
---

Para definir y desarrollar la librería UI de React de Lemon System hemos tomado diferentes decisiones técnicas. En este blog planteamos las dificultades a las que nos vimos enfrentados y el cómo y por qué optamos por solucionarlas.

<!--truncate-->

> 🚧 La librería sigue en desarrollo así que pueden cambiar algunas cosas escritas aquí con el tiempo.


# Requerimientos

Los requerimientos planteados para la librería UI del Design System de Lemontech son los siguientes:

- Debe ser consistente con el Design System.
- Debe ser facilmente adaptable en los equipos de Lemontech, considerando la conformación de estos en su mayoría por ingenieros Full-Stacks.
- No debe crear mayores inconvenientes al implementarla en nuevas o en antiguas aplicaciones ya creadas.

# Decisiones de implementación 

## Estilos

Dos formas de hacerlo

- Style Props (style-system, xstyled, theme-ui)
- Tailwind como css-in-js (twind, twin.macro)

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
