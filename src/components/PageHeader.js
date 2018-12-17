import React from 'react'
// Elements
import Box from '../elements/Box'
// Components
import Heading from './Heading'

function PageHeader() {
  return (
    <Box px="xl" py="m" position="relative" boxShadow="default">
      <Heading fontWeight={500}>
        <span role="img" aria-label="smiling face with heart-shaped eyes">
          😍
        </span>{' '}
        Dashboard
      </Heading>
    </Box>
  )
}

export default PageHeader
