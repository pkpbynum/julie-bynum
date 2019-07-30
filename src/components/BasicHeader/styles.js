import styled from 'styled-components'
import { Link } from 'gatsby'
import arrow from '../../images/arrow.svg'
import hoveredArrow from '../../images/hoveredArrow.svg'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid ${({ theme }) => theme.colors.layout.secondary};
  padding-bottom: 10px;
  margin-bottom: 30px;
`

export const Header = styled.div`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.display.family};
  font-weight: ${({ theme }) => theme.fonts.display.weight};
  color: ${({ theme }) => theme.colors.fonts.primary};
  font-size: 36px;

  @media only screen and (max-width: 415px) {
    font-size: 30px;
  }
`

export const BackButton = styled(Link)`
  height: 25px;
  width: 60px;
  margin: 7px;
  margin-left: -30px;
  background: center / contain no-repeat url(${arrow});

  &:hover {
    background-image: url(${hoveredArrow});
  }
`
