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
import BasicHeader from '../BasicHeader'
import ContactTab from '../ContactTab'
import Copyright from '../Copyright'

const Team = ({ members }) => (
  <PageContainer>
    <SEO title="Team" />
    <ContentContainer>
      <BasicHeader title="Team" />
      {members.map(
        ({
          node: {
            data: {
              email: { text: email },
              job_title: { text: jobTitle },
              name: { text: name },
              headshot: {
                localFile: {
                  childImageSharp: { resolutions }
                }
              }
            }
          }
        }) => (
          <MemberWrapper>
            <Headshot fixed={resolutions} />
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
