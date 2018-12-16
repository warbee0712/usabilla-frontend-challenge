import React from 'react'
import { render } from 'test-utils'
import PageHeader from '../PageHeader'

describe('PageHeader', () => {
  it('should match snapshot', () => {
    const { container } = render(<PageHeader />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
