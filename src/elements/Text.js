import styled from 'styled-components'
import {
  color,
  fontSize,
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
} from 'styled-system'

const Text = styled.p`
  ${color}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${textAlign}
`

Text.propTypes = {
  ...color.propTypes,
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...letterSpacing.propTypes,
  ...lineHeight.propTypes,
  ...textAlign.propTypes,
}

Text.defaultProps = {
  fontFamily: 'primary',
  fontSize: 's',
  lineHeight: 's',
}

export default Text
