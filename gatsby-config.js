require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Julie Bynum`,
    description: `Professional website of Dr. Julie Bynum, Margaret Terpenning Collegiate Professor of Internal Medicine at the University of Michigan`,
    keywords: `Julie Bynum M.D. M.P.H. University of Michigan UMich Geriatrics Research`
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'juliebynum',
        defaultLang: 'en-us',
        accessToken: `${process.env.PRISMIC_API_KEY}`
      }
    },
    'gatsby-plugin-eslint',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
        icon: `src/images/favicon.png`,
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
    },
    `gatsby-plugin-netlify`
  ]
}
