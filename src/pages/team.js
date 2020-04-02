import React from 'react'
import { graphql } from 'gatsby'
import Team from '../components/team'

export const query = graphql`
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
                  ...GatsbyImageSharpFixed
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
`

export default ({ data }) => (
  <Team members={data.prismic.allTeam_members.edges} />
)
