import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import About from '../components/about'

export default () => (
  <StaticQuery
    query={graphql`
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
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <About node={data.prismic.allAbout_pages.edges[0].node} />}
  />
)
