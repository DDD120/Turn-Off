module.exports = {
  siteMetadata: {
    title: `turn-off`,
    siteUrl: `https://turn-off.netlify.app`,
    ogImage: "src/images/og.png",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "ko",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Turn Off",
        short_name: "Turn Off",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#a4cfff",
        display: "standalone",
        icon: "src/images/favicon.webp",
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
