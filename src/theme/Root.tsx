import React from "react";
import { ThemeProvider } from "lemon-system";

/* export default function Root({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
} */

export default function Root({ children }) {
  return children;
}
