import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);

  font-family: ${({ theme }) => theme.fonts.display.family};
  font-weight: ${({ theme }) => theme.fonts.display.weight};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.fonts.copyright};
  text-align: center;
`
