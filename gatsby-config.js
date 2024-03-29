module.exports = {
  siteMetadata: {
    title: `Whale Watching`,
    description: `The chance of a lifetime to be able to swim in warm tropical waters and be face to face with these beautiful humpback whales.`,
    keywords: `whale watching, humpback whales, snorkelling with whales, whale watching dominican republic`,
    url: `https://www.silverbankwhales.com/`,
    siteUrl: `https://www.silverbankwhales.com/`,
    author: `@karnes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
          fonts: [
              `poppins:300,400,500,600,700`,
              `Alegreya:ital,wght@0,400;0,700;1,400`,
              `Yellowtail`      
          ], display: 'swap'       
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `whale-watching`,
        short_name: `whale`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/website_logo_transparent_background.webp`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
          trackingId: `G-HXM7FTQ84H`,
          head: true
      }
  }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
