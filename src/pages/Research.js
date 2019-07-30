import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Research from '../components/Research'

export default () => (
  <StaticQuery
    query={graphql`
      query ResearchQuery {
        allPrismicResearchProposal {
          edges {
            node {
              id
              uid
              data {
                date
                title {
                  text
                }
                short_description {
                  text
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Research proposals={data.allPrismicResearchProposal.edges} />
    )}
  />
)
