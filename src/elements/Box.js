import styled from 'styled-components'
import {
  alignSelf,
  borders,
  bgColor,
  boxShadow,
  display,
  flex,
  gridArea,
  gridColumn,
  gridRow,
  height,
  justifySelf,
  minHeight,
  minWidth,
  position,
  size,
  space,
  width,
} from 'styled-system'

const Box = styled.div`
  ${alignSelf}
  ${borders}
  ${bgColor}
  ${boxShadow}
  ${display}
  ${flex}
  ${gridArea}
  ${gridColumn}
  ${gridRow}
  ${height}
  ${justifySelf}
  ${minHeight}
  ${minWidth}
  ${position}
  ${size}
  ${space}
  ${width}
`

Box.propTypes = {
  ...alignSelf.propTypes,
  ...borders.propTypes,
  ...bgColor.propTypes,
  ...boxShadow.propTypes,
  ...display.propTypes,
  ...flex.propTypes,
  ...gridArea.propTypes,
  ...gridColumn.propTypes,
  ...gridRow.propTypes,
  ...height.propTypes,
  ...justifySelf.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...position.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...width.propTypes,
}

export default Box
