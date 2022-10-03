---
sidebar_position: 1
---

# Get started

## Installation

Instalar la librería en el proyecto:

```bash
npm install lemon-system@next
```

o si utilizas yarn:

```bash
yarn add lemon-system@next
```

## Provider

Importar ThemeProvider y ponerlo lo más arriba en el arbol de React:

```jsx
import { ThemeProvider } from "lemon-system"
```

En aplicaciones **React**:

```jsx
// index.js

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
```

En caso de ser una aplicación **Next.js**:

```jsx
// pages/_app.js

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```
