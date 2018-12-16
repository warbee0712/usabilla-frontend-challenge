import styled from 'styled-components'
import {
  alignItems,
  gridAutoColumns,
  gridAutoRows,
  gridAutoFlow,
  gridColumnGap,
  gridRowGap,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
  justifyContent,
} from 'styled-system'

import Box from './Box'

const Grid = styled(Box)`
  ${alignItems}
  ${gridAutoColumns}
  ${gridAutoRows}
  ${gridAutoFlow}
  ${gridColumnGap}
  ${gridRowGap}
  ${gridTemplateAreas}
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${justifyContent}
`

Grid.defaultProps = {
  display: 'grid',
}

Grid.propTypes = {
  ...alignItems.propTypes,
  ...gridAutoColumns.propTypes,
  ...gridAutoRows.propTypes,
  ...gridAutoFlow.propTypes,
  ...gridColumnGap.propTypes,
  ...gridRowGap.propTypes,
  ...gridTemplateAreas.propTypes,
  ...gridTemplateColumns.propTypes,
  ...gridTemplateRows.propTypes,
  ...justifyContent.propTypes,
}

export default Grid
