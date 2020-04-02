import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Home from '../components/home'

export default () => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
        prismic {
          allLanding_pages {
            edges {
              node {
                name
                title
              }
            }
          }
        }
      }
    `}
    render={data => <Home info={data.prismic.allLanding_pages.edges[0].node} />}
  />
)
