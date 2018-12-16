import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
// Elements
import Flex from '../elements/Flex'
// Theme
import theme from '../theme'

const Row = styled(Flex)`
  ${props =>
    !!props.gutter &&
    css`
      > * + * {
        margin-left: ${props.theme.space[props.gutter]};
      }
    `}
`

Row.defaultProps = {
  ...Flex.defaultProps,
  flexDirection: 'row',
}

Row.propTypes = {
  ...Flex.propTypes,
  gutter: PropTypes.oneOf(Object.keys(theme.space)),
}

export default Row
