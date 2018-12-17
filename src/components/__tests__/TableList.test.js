import React from 'react'
import { render } from 'test-utils'
import TableList from '../TableList'
import Item from '../TableList/Item'
import Header from '../TableList/Header'

import ITEMS from '../__mock__/items.json'

describe('TableList', () => {
  it('should match snapshot', () => {
    const { container } = render(<TableList items={ITEMS} />)

    expect(container.firstChild).toMatchSnapshot()
  })
  it('empty state should match snapshot', () => {
    const { container } = render(<TableList items={[]} />)

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render all items', () => {
    const { getAllByTestId } = render(<TableList items={ITEMS} />)

    const items = getAllByTestId('item')

    expect(items).toHaveLength(ITEMS.length)
  })
  describe('Item', () => {
    it('should match snapshot', () => {
      const { container } = render(<Item data={ITEMS[0]} />)

      expect(container.firstChild).toMatchSnapshot()
    })
  })
  describe('Header', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <Header fields={['field1', 'field2', 'field3']} />
      )

      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
