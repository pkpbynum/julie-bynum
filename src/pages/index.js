import React from 'react'
import { graphql } from 'gatsby'
import Home from '../components/home'

export const query = graphql`
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
`

export default ({ data }) => (
  <Home info={data.prismic.allLanding_pages.edges[0].node} />
)
