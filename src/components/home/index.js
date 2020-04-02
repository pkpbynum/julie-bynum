import React, { useRef, useEffect } from 'react'
import SEO from '../seo'
import {
  PageContainer,
  ContentWrapper,
  Name,
  NameWrapper,
  Title,
  Route,
  Divider,
  LinksWrapper
} from './styles'
import ContactTab from '../contactTab'
import Copyright from '../copyright'

export default ({
  info: {
    name: [{ text: name }],
    title: [{ text: title }]
  }
}) => {
  const divider = useRef()
  const links = useRef()

  useEffect(() => {
    setTimeout(() => {
      divider.current.style.height = '200px'
      divider.current.style.opacity = '1'
      links.current.style.transform = 'translateX(0)'
      links.current.style.opacity = '1'
    }, 100)
  })

  return (
    <PageContainer>
      <SEO title="Home" />
      <ContentWrapper>
        <NameWrapper>
          <Name>{name}</Name>
          <Title>{title}</Title>
        </NameWrapper>
        <Divider ref={divider} />
        <LinksWrapper ref={links}>
          <Route to="/about">About</Route>
          <Route to="/research">Research</Route>
          <Route to="/team">Team</Route>
        </LinksWrapper>
      </ContentWrapper>
      <Copyright />
      <ContactTab />
    </PageContainer>
  )
}
