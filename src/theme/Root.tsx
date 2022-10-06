import React from "react";
import { ThemeProvider } from "lemon-system";

interface RootProps {
  children: JSX.Element;
}

export default function Root({ children }: RootProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
