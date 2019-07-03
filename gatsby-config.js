module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Professional website of Dr. Julie Bynum, Margaret Terpenning Collegiate Professor of Internal Medicine at the University of Michigan`,
    keywords: `Julie Bynum M.D. M.P.H. University of Michigan UMich`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Julie Bynum`,
        short_name: `Julie Bynum`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
        theme_color_in_head: false
      }
    },
    'gatsby-plugin-eslint'
  ]
}
