import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Research from '../components/research'

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <Research proposals={data.prismic.allResearch_proposals.edges} />
    )}
  />
)
