import React, { memo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// Elements
import Grid from '../../elements/Grid'
import Flex from '../../elements/Flex'
import Box from '../../elements/Box'
import Text from '../../elements/Text'
// Components
import { HeaderText } from './Header'
import Badge from '../Badge'

const StyledGrid = styled(Grid)`
  border-bottom: 1px solid ${props => props.theme.colors.light4};
`

const SmallText = styled(Text).attrs({
  as: 'span',
  fontSize: 'xs',
  lineHeight: 'xs',
})``

const Item = memo(({ data }) => (
  <StyledGrid
    gridAutoColumns={['1fr', '1fr 4fr 2fr 2fr 2fr']}
    gridTemplateAreas={[
      '"rating" "comment" "browser" "device" "platform"',
      '"rating comment browser device platform"',
    ]}
    gridColumnGap="m"
    p="l"
    data-testid="item"
  >
    <Flex pb={['s', 0]} alignItems="baseline" gridArea="rating">
      <Box display={['inline-flex', 'none']} flex="0 100px">
        <HeaderText>rating</HeaderText>
      </Box>
      <Badge active data-testid="item-rating">
        {data.rating}
      </Badge>
    </Flex>
    <Flex pb={['s', 0]} alignItems="baseline" gridArea="comment">
      <Box display={['inline-flex', 'none']} flex="0 100px">
        <HeaderText>comment</HeaderText>
      </Box>
      <SmallText data-testid="item-comment">{data.comment}</SmallText>
    </Flex>
    <Flex pb={['s', 0]} alignItems="baseline" gridArea="browser">
      <Box display={['inline-flex', 'none']} flex="0 100px">
        <HeaderText>browser</HeaderText>
      </Box>
      <SmallText data-testid="item-browser">{`${
        data.computed_browser.Browser
      } ${data.computed_browser.Version}`}</SmallText>
    </Flex>
    <Flex pb={['s', 0]} alignItems="baseline" gridArea="device">
      <Box display={['inline-flex', 'none']} flex="0 100px">
        <HeaderText>device</HeaderText>
      </Box>
      <SmallText data-testid="item-device">{data.device}</SmallText>
    </Flex>
    <Flex pb={['s', 0]} alignItems="baseline" gridArea="platform">
      <Box display={['inline-flex', 'none']} flex="0 100px">
        <HeaderText data-testid="item-platform">platform</HeaderText>
      </Box>
      <SmallText>{data.computed_browser.Platform}</SmallText>
    </Flex>
  </StyledGrid>
))

Item.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    computed_browser: PropTypes.shape({
      Browser: PropTypes.string.isRequired,
      Platform: PropTypes.string.isRequired,
      Version: PropTypes.string,
    }).isRequired,
    device: PropTypes.string.isRequired,
  }).isRequired,
}

export default Item
