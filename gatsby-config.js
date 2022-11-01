module.exports = {
  siteMetadata: {
    title: `turn-off`,
    siteUrl: `https://turn-off.netlify.app/`,
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
  ],
};
