import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// Elements
import Grid from '../../elements/Grid'
import Box from '../../elements/Box'
import Text from '../../elements/Text'

export const HeaderText = styled(Text).attrs({
  fontWeight: 500,
})`
  text-transform: lowercase;
  font-variant: small-caps;
`

const Header = ({ fields }) => {
  return (
    <Grid
      display={['none', 'grid']}
      gridAutoColumns={['1fr 4fr 2fr 2fr 2fr']}
      gridTemplateAreas='"rating comment browser device platform"'
      gridColumnGap="m"
      px="l"
      py="m"
    >
      {fields.map(field => (
        <Box key={field} gridArea={field}>
          <HeaderText>{field}</HeaderText>
        </Box>
      ))}
    </Grid>
  )
}

Header.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default Header
