import React from "react";
import GlobalStyle from "./common/GlobalStyle";
import { ProgressProvider } from "store/progress";
import Container from "./common/Container";

export default function Layout({ children }) {
  return (
    <ProgressProvider>
      <GlobalStyle />
      <Container>{children}</Container>
    </ProgressProvider>
  );
}
