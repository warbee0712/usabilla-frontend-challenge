import React from 'react'
import { render } from 'test-utils'
import Button from '../Button'

describe('Button', () => {
  it('should match snapshot', () => {
    const { container } = render(<Button>1</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })
  it('active should match snapshot', () => {
    const { container } = render(<Button active>1</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
