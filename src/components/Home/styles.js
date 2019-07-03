import styled from 'styled-components'

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display.family};
  font-weight: ${({ theme }) => theme.fonts.display.weight};
  color: ${({ theme }) => theme.colors.fonts.header};
`
