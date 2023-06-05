import * as React from "react"
import Main from "components/Main"

const IndexPage = () => {
  return <Main />
}

export const Head = () => (
  <>
    <meta name="Keywords" content="Interactive Webtoon, 인터랙티브 웹툰" />
    <meta name="Description" content="졸업작품 : 인터랙티브 웹툰" />
    <meta name="author" content="DDD120 : 이수민" />
    <title>Turn Off</title>
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Trun Off" />
    <meta property="og:site_name" content="Trun Off" />
    <meta property="og:description" content="졸업작품 : 인터랙티브 웹툰" />
    <meta property="og:image" content="https://turn-off.netlify.app/og.png" />
    <meta name="twitter:title" content="Trun Off" />
    <meta name="twitter:description" content="졸업작품 : 인터랙티브 웹툰" />
    <meta name="twitter:image" content="https://turn-off.netlify.app/og.png" />
  </>
)

export default IndexPage
