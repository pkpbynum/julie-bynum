import styled from 'styled-components'

export const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 15vh;
`

export const ContentContainer = styled.div`
  width: calc(100% - 100px);
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
`

export const Date = styled.div`
  font-family: ${({ theme }) => theme.fonts.display.family};
  font-family: ${({ theme }) => theme.fonts.display.weight};
  font-size: 18px;
  margin: 18px;
  align-self: center;
`

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-family: ${({ theme }) => theme.fonts.body.weight};
  font-size: 18px;
  line-height: 28px;
  text-align: justify;
  margin-bottom: 18px;

  @media only screen and (max-width: 415px) {
    font-size: 16px;
  }
`

export const LinksHeader = styled.div`
  font-family: ${({ theme }) => theme.fonts.display.family};
  font-family: ${({ theme }) => theme.fonts.display.weight};
  font-size: 24px;
  margin: 24px 0;
  align-self: flex-start;
`

export const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: flex-start;
  padding-left: 40px;
  margin-bottom: 50px;
`

export const ExternalLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.display.family};
  font-weight: ${({ theme }) => theme.fonts.display.weight};
  color: ${({ theme }) => theme.colors.fonts.body};
  text-decoration: none;
  text-align: center;
  transition: color 0.15s ease;
  margin-top: 50px;

  &:hover {
    color: ${({ theme }) => theme.colors.fonts.link};
  }
`
