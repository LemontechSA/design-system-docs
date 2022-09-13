import React from "react";
import { ThemeProvider } from "lemon-system";

export default function Root({ children }) {
  return <ThemeProvider resetCSS={false}>{children}</ThemeProvider>;
}
