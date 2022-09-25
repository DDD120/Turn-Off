import * as React from "react";
import Container from "components/common/Container";
import GlobalStyle from "components/common/GlobalStyle";
import { ProgressProvider } from "store/progress";
import Home from "components/home";

const IndexPage = () => {
  return (
    <ProgressProvider>
      <Container>
        <GlobalStyle />
        <Home />
      </Container>
    </ProgressProvider>
  );
};

export const Head = () => <title>Turn Off</title>;

export default IndexPage;
