import React from "react";
import { ThemeProvider } from "lemon-system";

interface RootProps {
  children: React.ReactElement;
}

export default function Root({ children }: RootProps) {
  return <ThemeProvider resetCSS={false}>{children}</ThemeProvider>;
}
