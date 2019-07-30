import styled from 'styled-components'
import Img from 'gatsby-image'

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
  align-items: center;
  margin-bottom: 200px;
`

export const MemberWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 50px;

  @media only screen and (max-width: 414px) {
    flex-direction: column;
    align-items: center;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

export const Name = styled.div`
  font-family: ${({ theme }) => theme.fonts.display.family};
  font-weight: ${({ theme }) => theme.fonts.display.weight};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.fonts.body};
  margin-bottom: 5px;

  @media only screen and (max-width: 414px) {
    text-align: center;
  }
`

export const JobTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.display.family};
  font-weight: ${({ theme }) => theme.fonts.display.weight};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.fonts.body};
  margin-bottom: 10px;

  @media only screen and (max-width: 414px) {
    text-align: center;
  }
`

export const Email = styled.a`
  font-family: ${({ theme }) => theme.fonts.display.family};
  font-weight: ${({ theme }) => theme.fonts.display.weight};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.fonts.minorLabel};
  text-decoration: none;
  transition: color 0.15s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.fonts.link};
  }

  @media only screen and (max-width: 414px) {
    text-align: center;
  }
`

export const Headshot = styled(Img).attrs({
  fadeIn: true,
  imgStyle: {
    width: 150,
    height: 150
  }
})`
  width: 150px !important;
  height: 150px !important;

  @media only screen and (max-width: 414px) {
    margin-bottom: 10px;
  }
`
