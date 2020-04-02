import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Team from '../components/team'

export default () => (
  <StaticQuery
    query={graphql`
      query TeamQuery {
        prismic {
          allTeam_members {
            edges {
              node {
                _meta {
                  id
                }
                email
                headshot
                headshotSharp {
                  childImageSharp {
                    fixed(width: 200) {
                      src
                    }
                  }
                }
                job_title
                name
              }
            }
          }
        }
      }
    `}
  >
    {data => <Team members={data.prismic.allTeam_members.edges} />}
  </StaticQuery>
)
