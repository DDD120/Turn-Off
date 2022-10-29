module.exports = {
  siteMetadata: {
    title: `turn-off`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
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
