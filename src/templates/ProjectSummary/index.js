import React from 'react'
import moment from 'moment'
import uuidv4 from 'uuidv4'
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
import ContactTab from '../../components/ContactTab'
import BasicHeader from '../../components/BasicHeader'
import Copyright from '../../components/Copyright'

const ProjectSummary = ({
  pageContext: { date, longDescription, title, papers }
}) => (
  <PageContainer>
    <SEO title="Research" />
    <ContentContainer>
      <BasicHeader title={title} to="/research" />
      <Date>{moment(date).format('MMM D, YYYY')}</Date>
      {longDescription.map(({ text }) => (
        <Paragraph key={uuidv4()}>{text}</Paragraph>
      ))}
      {papers.length > 0 && <LinksHeader>Related Publications</LinksHeader>}
      <LinksWrapper>
        {papers.map(({ paper_title: { text }, link: { url } }) => (
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

export default ProjectSummary
