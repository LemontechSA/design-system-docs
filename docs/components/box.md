---
id: box
category: layout
title: Box
description:
  Box is the most abstract component on top of which all other Chakra UI
  components are built. By default, it renders a `div` element
---

## Import

```js
import { Box } from "lemon-system";
```

## Usage

```jsx
<Box className="text-primary-01 p2 hover:bg-secondary-01">
  This is a Box
</Box>
```

### as prop

You can use the `as` prop to change the element render, just like
styled-components.

```jsx
<Box as="button" className="p2 border rounded">
  Button
</Box>
```
