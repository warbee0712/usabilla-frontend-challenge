import React from 'react'
import { render } from 'test-utils'
import Badge from '../Badge'

describe('Badge', () => {
  it('should match snapshot', () => {
    const { container } = render(<Badge>1</Badge>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
