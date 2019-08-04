import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import About from '../components/about'

export default () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        prismicAboutPage {
          data {
            biography {
              raw {
                text
              }
            }
            headshot {
              localFile {
                url
                childImageSharp {
                  resolutions(width: 500) {
                    ...GatsbyImageSharpResolutions_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <About data={data.prismicAboutPage.data} />}
  />
)
