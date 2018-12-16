import React from 'react'
import { render } from 'test-utils'
import Row from '../Row'

describe('Row', () => {
  it('should match snapshot', () => {
    const { container } = render(<Row />)

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should have a gutter between its children with the gutter prop', () => {
    const { container } = render(<Row gutter="m" />)

    expect(container.firstChild).toHaveStyleRule('margin-left', '1rem', {
      modifier: '> * + *',
    })
  })
})
