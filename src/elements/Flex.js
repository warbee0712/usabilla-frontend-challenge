import styled from 'styled-components'
import {
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  flex,
  flexBasis,
} from 'styled-system'

import Box from './Box'

const Flex = styled(Box)`
  ${alignItems}
  ${flex}
  ${flexBasis}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
`

Flex.defaultProps = {
  display: 'flex',
}

Flex.propTypes = {
  ...alignItems.propTypes,
  ...flex.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...justifyContent.propTypes,
}

export default Flex
