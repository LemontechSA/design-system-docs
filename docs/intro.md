---
sidebar_position: 1
---

# Get started

import { Code } from "@suit-ui/react"

## Installation

With npm:

```bash
npm install @suit-ui/react@next
```

or if you use yarn:

```bash
yarn add @suit-ui/react@next
```

## Provider

Import <Code>ThemeProvider</Code> and put it as high as possible in the React root file:

```jsx
import { ThemeProvider } from "@suit-ui/react";
```

In apps using **React**:

```jsx
// index.js

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
```

In case of using **Next.js**:

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

Optionally, you can disable CSS Baseline:

```jsx
<ThemeProvider resetCSS={false}>...</ThemeProvider>
```
