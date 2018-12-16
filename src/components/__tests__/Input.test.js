import React from 'react'
import { render } from 'test-utils'
import Input from '../Input'

describe('Input', () => {
  it('should match snapshot', () => {
    const { container } = render(<Input placeholder="Search here..." />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
