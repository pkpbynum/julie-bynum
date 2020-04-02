import React from 'react'
import { graphql } from 'gatsby'

import About from '../components/about'

export const query = graphql`
  query AboutQuery {
    prismic {
      allAbout_pages {
        edges {
          node {
            biography
            headshot
            headshotSharp {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
export default ({ data }) => (
  <About node={data.prismic.allAbout_pages.edges[0].node} />
)
