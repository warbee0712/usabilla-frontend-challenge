import React from 'react'
import { render } from 'test-utils'
import TableList from '../TableList'
import Item from '../TableList/Item'
import Header from '../TableList/Header'

const ITEMS = [
  {
    comment: 'belle offre de services',
    computed_browser: {
      Browser: 'Chrome',
      Version: '32.0',
      Platform: 'MacOSX',
      FullBrowser: 'Chrome',
    },
    device: 'Desktop',
    id: '52efc552b6679cfe6ede406c',
    rating: 5,
  },
  {
    comment: 'bouton ne fonctionne pas',
    computed_browser: {
      Browser: 'Chrome',
      Version: '32.0',
      Platform: 'MacOSX',
      FullBrowser: 'Chrome',
    },
    device: 'Desktop',
    id: '52efc51fb6679c986b24c7bd',
    rating: 2,
  },
  {
    comment: 'new layout awesome',
    computed_browser: {
      Browser: 'Chrome',
      Version: '32.0',
      Platform: 'MacOSX',
      FullBrowser: 'Chrome',
    },
    device: 'Desktop',
    id: '52efc4dcfa8d1bda61ec1c64',
    rating: 4,
  },
  {
    comment: 'sugestia',
    computed_browser: {
      Browser: 'Chrome',
      Version: '32.0',
      Platform: 'Win7',
      FullBrowser: 'Chrome',
    },
    device: 'Desktop',
    id: '52ef53d2b6679c4a3cdb593c',
    rating: 3,
  },
]

describe('TableList', () => {
  it('should match snapshot', () => {
    const { container } = render(<TableList items={ITEMS} />)

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
