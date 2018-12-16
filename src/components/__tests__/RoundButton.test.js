import React from 'react'
import { render } from 'test-utils'
import RoundButton from '../RoundButton'

describe('RoundButton', () => {
  it('should match snapshot', () => {
    const { container } = render(<RoundButton>1</RoundButton>)

    expect(container.firstChild).toMatchSnapshot()
  })
  it('active should match snapshot', () => {
    const { container } = render(<RoundButton active>1</RoundButton>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
