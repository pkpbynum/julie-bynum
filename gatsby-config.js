module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Professional website of Dr. Julie Bynum, Margaret Terpenning Collegiate Professor of Internal Medicine at the University of Michigan`,
    keywords: `Julie Bynum M.D. M.P.H. University of Michigan UMich`
  },
  plugins: [
    'gatsby-plugin-eslint',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
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
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Merriweather`,
            variants: ['400']
          },
          {
            family: `Open Sans`,
            variants: [`400`]
          }
        ]
      }
    }
  ]
}
