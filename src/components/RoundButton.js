import styled, { css } from 'styled-components'
import { size, fontSize } from 'styled-system'
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

const RoundButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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
  ${size}
  ${props => props.active && activeStyle}
`

RoundButton.defaultProps = {
  size: [30, 40],
  fontSize: 'xs',
}

export default RoundButton
