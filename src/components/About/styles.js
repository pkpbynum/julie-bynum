import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import arrow from '../../images/arrow.svg'
import hoveredArrow from '../../images/hoveredArrow.svg'

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

export const Paragraph = styled.div`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-family: ${({ theme }) => theme.fonts.body.weight};
  font-size: 18px;
  line-height: 28px;
  text-align: justify;
  margin-bottom: 18px;
`

export const Headshot = styled(Img).attrs({
  fadeIn: true,
  imgStyle: {
    width: 250,
    height: 300
  }
})`
  width: 250px !important;
  height: 300px !important;
  float: left;
  margin: 0 10px 0 0;

  @media only screen and (max-width: 500px) {
    display: block !important;
    float: none;
    margin: 0 0 25px 50%;
    transform: translateX(-50%);
  }
`

export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
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

export const Route = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.display.family};
  font-weight: ${({ theme }) => theme.fonts.display.weight};
  font-size: 36px;
  color: ${({ theme }) => theme.colors.fonts.body};
  text-decoration: none;
  text-align: center;
  margin-top: 50px;

  &:hover {
    color: ${({ theme }) => theme.colors.fonts.link};

    &:after {
      background-image: url(${hoveredArrow});
    }
  }

  &:after {
    content: '';
    position: relative;
    bottom: 2px;
    left: 5px;
    width: 30px;
    height: 20px;
    display: inline-block;
    background: center / contain no-repeat url(${arrow});
    transform: scale(-1, 1);
    width: 50px;
  }
`
