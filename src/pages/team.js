import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Team from '../components/Team'

export default () => (
  <StaticQuery
    query={graphql`
      query TeamQuery {
        allPrismicTeamMember {
          edges {
            node {
              data {
                email {
                  text
                }
                headshot {
                  localFile {
                    childImageSharp {
                      resolutions(width: 200) {
                        src
                      }
                    }
                  }
                }
                job_title {
                  text
                }
                name {
                  text
                }
              }
            }
          }
        }
      }
    `}
  >
    {data => <Team members={data.allPrismicTeamMember.edges} />}
  </StaticQuery>
)
