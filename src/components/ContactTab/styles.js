import styled from 'styled-components'

export const EmailMailTo = styled.a`
  position: fixed;
  left: 50px;
  bottom: 50px;
  text-decoration: none;
  z-index: 999;

  @media only screen and (max-width: 415px) {
    top: 20px;
    left: 20px;
  }

  ${({ responsive }) =>
    responsive
      ? `@media only screen and (max-width: 1023px) {
    position: static;
  }`
      : ''}
`

export const Container = styled.button.attrs({
  type: 'button'
})`
  width: 130px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.button.primary};
  border: 2px solid ${({ theme }) => theme.colors.button.secondary};
  display: grid;
  place-items: center;
  outline: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.225s ease;

  font-family: ${({ theme }) => theme.fonts.display.family};
  font-weight: ${({ theme }) => theme.fonts.display.weight};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.button.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.secondary};
    color: ${({ theme }) => theme.colors.button.primary};
  }
`
