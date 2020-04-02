import React from 'react'
import {
  PageContainer,
  ContentContainer,
  MemberWrapper,
  Headshot,
  InfoWrapper,
  Name,
  JobTitle,
  Email
} from './styles'
import SEO from '../seo'
import BasicHeader from '../basicHeader'
import ContactTab from '../contactTab'
import Copyright from '../copyright'

const Team = ({ members }) => (
  <PageContainer>
    <SEO title="Team" />
    <ContentContainer>
      <BasicHeader title="Team" />
      {members.map(
        ({
          node: {
            _meta: { id },
            email: [{ text: email }],
            job_title: [{ text: jobTitle }],
            name: [{ text: name }],
            headshotSharp: {
              childImageSharp: { fixed }
            }
          }
        }) => (
          <MemberWrapper key={id}>
            <Headshot fixed={fixed} />
            <InfoWrapper>
              <Name>{name}</Name>
              <JobTitle>{jobTitle}</JobTitle>
              <Email href={`mailto:${email}`}>{email}</Email>
            </InfoWrapper>
          </MemberWrapper>
        )
      )}
      <ContactTab responsive />
    </ContentContainer>
    <Copyright />
  </PageContainer>
)

export default Team
