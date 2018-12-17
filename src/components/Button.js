import styled, { css } from 'styled-components'
import { fontSize } from 'styled-system'
import { focus } from '../sharedStyles'

const activeStyle = css`
  background-color: ${props => props.theme.colors.blue2};
  border-color: ${props => props.theme.colors.blue2};
  color: ${props => props.theme.colors.white};
  &:hover {
    background-color: ${props => props.theme.colors.blue1};
    border-color: ${props => props.theme.colors.blue1};
    box-shadow: ${props => props.theme.shadows.default};
    color: ${props => props.theme.colors.white};
  }
`

const Button = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.dark3};
  border: 1px solid ${props => props.theme.colors.dark3};
  border-radius: ${props => props.theme.radii.infinite};
  transition: color ${props => props.theme.transition},
    box-shadow ${props => props.theme.transition};
  position: relative;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${props => props.theme.colors.dark3};
    border-color: ${props => props.theme.colors.dark3};
    box-shadow: ${props => props.theme.shadows.default};
    color: ${props => props.theme.colors.white};
  }
  &:focus {
    ${focus}
  }
  ${fontSize}
  ${props => props.active && activeStyle}
`

Button.defaultProps = {
  fontSize: 'xs',
}

export default Button
