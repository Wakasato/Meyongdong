module.exports = {
  siteMetadata: {
    title: `Meyondong`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-107941757-1"
    }
  }]
};