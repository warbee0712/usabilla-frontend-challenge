import styled from 'styled-components'
import { size } from 'styled-system'
import Button from './Button'

const RoundButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${size}
`

RoundButton.defaultProps = {
  size: [30, 40],
}

export default RoundButton
