import { css } from 'styled-components'

export const focus = css`
  border: 1px solid ${props => props.theme.colors.blue2};
  box-shadow: ${props => props.theme.shadows.default};
  outline: none;
`
