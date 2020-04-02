import React from 'react'
import moment from 'moment'
import {
  PageContainer,
  ContentContainer,
  GrantWrapper,
  Title,
  Date,
  Description,
  Route
} from './styles'
import SEO from '../seo'
import BasicHeader from '../basicHeader'
import ContactTab from '../contactTab'
import Copyright from '../copyright'

const Research = ({ proposals }) => (
  <PageContainer>
    <SEO title="Research" />
    <ContentContainer>
      <BasicHeader title="Research" />
      {proposals.map(
        ({
          node: {
            _meta: { uid },
            date,
            title: [{ text: title }],
            short_description: [{ text }]
          }
        }) => {
          const formattedDate = moment(date).format('MMM D, YYYY')
          return (
            <GrantWrapper key={uid}>
              <Title to={`/proposal/${uid}`}>{title}</Title>
              <Date>{formattedDate}</Date>
              <Description>{text}</Description>
              <Route to={`/proposal/${uid}`}>read more...</Route>
            </GrantWrapper>
          )
        }
      )}
      <ContactTab responsive />
    </ContentContainer>
    <Copyright />
  </PageContainer>
)

export default Research
