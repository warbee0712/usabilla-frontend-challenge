import styled, { css } from 'styled-components'
import { size, fontSize } from 'styled-system'

const activeStyle = css`
  background-color: ${props => props.theme.colors.blue2};
  border-color: ${props => props.theme.colors.blue2};
  color: ${props => props.theme.colors.white};
`

const RoundLabel = styled.span`
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
  ${fontSize}
  ${size}
  ${props => props.active && activeStyle}
`

RoundLabel.defaultProps = {
  size: 30,
  fontSize: 'xs',
}

export default RoundLabel
