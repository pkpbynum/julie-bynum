import styled from 'styled-components'
import { Link } from 'gatsby'

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

export const GrantWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`

export const Title = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.display.family};
  font-weight: ${({ theme }) => theme.fonts.display.weight};
  font-size: 24px;
  line-height: 30px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.fonts.header};
`

export const Date = styled.div`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-weight: ${({ theme }) => theme.fonts.body.weight};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.fonts.minorLabel};
`

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-family: ${({ theme }) => theme.fonts.body.weight};
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 18px;
  flex: 1;
`

export const Route = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.display.family};
  font-weight: ${({ theme }) => theme.fonts.display.weight};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.fonts.body};
  text-decoration: none;
  align-self: flex-end;

  &:hover {
    color: ${({ theme }) => theme.colors.fonts.link};
  }
`
