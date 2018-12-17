import styled from 'styled-components'
import { color, space, fontSize, borderRadius, width } from 'styled-system'
import { focus } from '../sharedStyles'

const Input = styled.input`
  border: 1px solid ${props => props.theme.colors.light3};
  ${borderRadius}
  ${color}
  ${fontSize}
  ${space}
  ${width}
  &:hover {
    box-shadow: ${props => props.theme.shadows.default};
  }
  &:focus {
    ${focus}
  }
`

Input.propTypes = {
  ...borderRadius.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...space.propTypes,
  ...width.propTypes,
}

Input.defaultProps = {
  borderRadius: 'default',
  color: 'dark3',
  bg: 'white',
  fontSize: 'xs',
  px: 'm',
  py: 's',
}

export default Input
