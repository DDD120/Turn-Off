import * as React from "react";
import Home from "components/home";
import Layout from "components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export const Head = () => <title>Turn Off</title>;

export default IndexPage;
