import React from "react";
import { ThemeProvider } from "@suit-ui/react";

interface RootProps {
  children: React.ReactElement;
}

export default function Root({ children }: RootProps) {
  return <ThemeProvider resetCSS={false}>{children}</ThemeProvider>;
}
