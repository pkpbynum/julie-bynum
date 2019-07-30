import React from 'react'
import {
  PageContainer,
  ContentContainer,
  Paragraph,
  Headshot,
  LinksWrapper,
  ExternalLink,
  Route
} from './styles'
import SEO from '../seo'
import BasicHeader from '../basicHeader'
import Copyright from '../copyright'
import ContactTab from '../contactTab'

const About = ({
  data: {
    biography: { raw: biography },
    headshot: {
      localFile: {
        childImageSharp: { resolutions }
      }
    }
  }
}) => (
  <PageContainer>
    <SEO title="About" />
    <ContentContainer>
      <BasicHeader title="About" />
      <Paragraph>
        <Headshot alt="Julie Bynum" fixed={resolutions} />
        {biography.map(({ text }) => `${text}\n\n`)}
      </Paragraph>
      <LinksWrapper>
        <ExternalLink href="https://www.linkedin.com/in/julie-bynum-95880147/">
          See all publications
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/julie-bynum-95880147/">
          Connect on LinkedIn
        </ExternalLink>
      </LinksWrapper>
      <Route to="/research">Research</Route>
      <Route to="/team">Team</Route>
      <ContactTab responsive style={{ marginTop: 50 }} />
    </ContentContainer>
    <Copyright />
  </PageContainer>
)

export default About
