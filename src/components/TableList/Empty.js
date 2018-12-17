import React from 'react'
import Box from '../../elements/Box'
import Text from '../../elements/Text'

const Empty = () => (
  <Box p={[75, 150]}>
    <Text fontSize="l" lineHeight="l" textAlign="center">
      Oops, we couldn&apos;t find anything with these filters. Perhaps you can
      try loosening the search parameters a little bit.
    </Text>
  </Box>
)

export default Empty
