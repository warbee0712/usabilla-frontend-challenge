import { css } from 'styled-components'

export const focus = css`
  border: 1px solid ${props => props.theme.colors.blue2};
  box-shadow: ${props => props.theme.shadows.default};
  outline: none;
`

export const text = css`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.s};
`

export const textSmall = css`
  font-family: ${props => props.theme.fonts.base};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: ${props => props.theme.lineHeights.xs};
`
