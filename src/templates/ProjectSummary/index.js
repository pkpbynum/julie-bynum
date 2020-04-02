/* eslint-disable camelcase */
import React from 'react'
import moment from 'moment'
import uuidv4 from 'uuidv4'
import { graphql } from 'gatsby'
import {
  PageContainer,
  ContentContainer,
  Date,
  Paragraph,
  LinksHeader,
  LinksWrapper,
  ExternalLink
} from './styles'
import SEO from '../../components/seo'
import ContactTab from '../../components/contactTab'
import BasicHeader from '../../components/basicHeader'
import Copyright from '../../components/copyright'

export const query = graphql`
  query MyQuery($uid: String) {
    prismic {
      allResearch_proposals(uid: $uid) {
        edges {
          node {
            date
            long_description
            title
            papers {
              paper_title
              link {
                ... on PRISMIC__ExternalLink {
                  _linkType
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

const ProjectSummary = ({ data }) => {
  // Check data exists
  if (!data.prismic.allResearch_proposals.edges.slice(0, 1).pop()) {
    return null
  }
  const {
    prismic: {
      allResearch_proposals: {
        edges: [
          {
            node: {
              date,
              long_description,
              title: [{ text: title }],
              papers
            }
          }
        ]
      }
    }
  } = data
  return (
    <PageContainer>
      <SEO title="Research" />
      <ContentContainer>
        <BasicHeader title={title} to="/research" />
        <Date>{moment(date).format('MMM D, YYYY')}</Date>
        {long_description.map(({ text }) => (
          <Paragraph key={uuidv4()}>{text}</Paragraph>
        ))}
        {papers.length > 0 && <LinksHeader>Related Publications</LinksHeader>}
        <LinksWrapper>
          {papers.map(({ paper_title: [{ text }], link: { url } }) => (
            <li key={uuidv4()} style={{ marginBottom: 18 }}>
              <ExternalLink href={url}>{text}</ExternalLink>
            </li>
          ))}
        </LinksWrapper>

        <ContactTab responsive />
      </ContentContainer>
      <Copyright />
    </PageContainer>
  )
}

export default ProjectSummary
