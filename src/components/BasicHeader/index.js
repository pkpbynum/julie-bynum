import React from 'react'
import { Container, BackButton, Header } from './styles'

const BasicHeader = ({ title, to }) => (
  <Container>
    <BackButton to={to || '/'} />
    <Header>{title}</Header>
  </Container>
)

export default BasicHeader
