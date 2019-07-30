import React from 'react'
import moment from 'moment'
import uuidv4 from 'uuidv4'
import {
  PageContainer,
  ContentContainer,
  GrantWrapper,
  Title,
  Date,
  Description,
  Route
} from './styles'
import BasicHeader from '../BasicHeader'
import ContactTab from '../ContactTab'
import Copyright from '../Copyright'

const Research = ({ proposals }) => (
  <PageContainer>
    <ContentContainer>
      <BasicHeader title="Research" />
      {proposals.map(
        ({
          node: {
            uid,
            data: {
              date,
              title: { text: title },
              short_description: { text }
            }
          }
        }) => {
          const formattedDate = moment(date).format('MMM D, YYYY')
          return (
            <GrantWrapper key={uuidv4()}>
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
