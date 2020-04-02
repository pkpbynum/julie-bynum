import React from 'react'
import { graphql } from 'gatsby'
import Research from '../components/research'

export const query = graphql`
  query ResearchQuery {
    prismic {
      allResearch_proposals {
        edges {
          node {
            date
            title
            short_description
            papers {
              link {
                ... on PRISMIC__ExternalLink {
                  _linkType
                  url
                }
              }
              paper_title
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => (
  <Research proposals={data.prismic.allResearch_proposals.edges} />
)
