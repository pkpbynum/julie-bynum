import React from 'react'
import { Container, EmailMailTo } from './styles'

export default ({ responsive, ...restProps }) => (
  <EmailMailTo
    {...restProps}
    responsive={responsive}
    href="mailto:bynumju@med.umich.edu"
  >
    <Container>CONTACT</Container>
  </EmailMailTo>
)
