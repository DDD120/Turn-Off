import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Seo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          ogImage
        }
      }
    }
  `)

  const { siteUrl, ogImage } = data.site.siteMetadata

  return (
    <>
      <meta name="Keywords" content="Interactive Webtoon, 인터랙티브 웹툰" />
      <meta name="Description" content="졸업작품 : 인터랙티브 웹툰" />
      <meta name="author" content="DDD120 : 이수민" />
      <title>Turn Off</title>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Trun Off" />
      <meta property="og:site_name" content="Trun Off" />
      <meta property="og:description" content="졸업작품 : 인터랙티브 웹툰" />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:title" content="Trun Off" />
      <meta name="twitter:description" content="졸업작품 : 인터랙티브 웹툰" />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
    </>
  )
}

export default Seo
