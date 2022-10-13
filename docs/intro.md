---
sidebar_position: 1
---

import { Code } from "lemon-system"

# Get started

## Installation

Install Lemon System:

```bash
npm install lemon-system@next
```

or if you use yarn:

```bash
yarn add lemon-system@next
```

## Provider

Import <Code>ThemeProvider</Code> and put it as high as possible in the React tree:

```jsx
import { ThemeProvider } from "lemon-system"
```

In apps that use **React**:

```jsx
// index.js

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
```

In case of the app using **Next.js**:

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

## CSS Baseline

The CSS Baseline can be deactivated:

```jsx
<ThemeProvider resetCSS={false}>
  ...
</ThemeProvider>
```