import styled from 'styled-components'
import { Link } from 'gatsby'

export const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media only screen and (max-width: 700px) {
    align-items: center;
  }
`

export const Name = styled.div`
  font-family: ${({ theme }) => theme.fonts.display.family};
  font-weight: ${({ theme }) => theme.fonts.display.weight};
  color: ${({ theme }) => theme.colors.fonts.primary};
  font-size: 36px;
  text-align: right;

  @media only screen and (max-width: 700px) {
    text-align: center;
  }

  @media only screen and (max-width: 415px) {
    font-size: 26px;
  }
`

export const Title = styled.div`
  max-width: 415px;
  font-family: ${({ theme }) => theme.fonts.display.family};
  font-weight: ${({ theme }) => theme.fonts.display.weight};
  color: ${({ theme }) => theme.colors.fonts.primary};
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  margin-left: auto;

  @media only screen and (max-width: 700px) {
    text-align: center;
    margin: 0;
  }

  @media only screen and (max-width: 415px) {
    max-width: 85%;
    font-size: 20px;
  }
`

export const Divider = styled.div`
  width: 2px;
  height: 200px;
  opacity: 0;
  background: ${({ theme }) => theme.colors.fonts.body};
  margin: 0 50px;
  transition: height 1s ease-out, opacity 1s ease-out;

  @media only screen and (max-width: 700px) {
    width: 350px;
    height: 2px !important;
    transition: width 1s ease-out, opacity 1s ease-out;
    margin: 20px 0;
  }

  @media only screen and (max-width: 415px) {
    width: 60%;
  }
`

export const LinksWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 25px 0;
  opacity: 0;
  transform: translate(100%);
  transition: transform 1s ease-out, opacity 1s ease-out;

  @media only screen and (max-width: 700px) {
    flex-direction: row;
    padding: 0;
    height: auto;
    width: 300px;
  }

  @media only screen and (max-width: 415px) {
    width: 250px;
  }
`

export const Route = styled(Link)`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.display.family};
  font-weight: ${({ theme }) => theme.fonts.display.weight};
  color: ${({ theme }) => theme.colors.fonts.body};
  font-size: 18px;
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.fonts.link};
  }
`
