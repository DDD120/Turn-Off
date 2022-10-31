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

export const Head = () => (
  <>
    <meta name="Keywords" content="Interactive Webtoon, 인터랙티브 웹툰" />
    <meta name="Description" content="졸업작품 : 인터랙티브 웹툰" />
    <meta name="author" content="DDD120 : 이수민" />
    <title>Turn Off</title>
  </>
);

export default IndexPage;
