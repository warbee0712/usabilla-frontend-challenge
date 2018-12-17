import React from 'react'
import { render } from 'test-utils'
import Map from '../Map'
import ITEMS from '../__mock__/items.json'

describe('Map', () => {
  it('should match snapshot', () => {
    const { container } = render(<Map items={ITEMS} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
