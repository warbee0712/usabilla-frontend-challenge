import React from 'react'
import { render, fireEvent, wait } from 'test-utils'
import App from './App'

describe('App', () => {
  it('renders without crashing', async () => {
    const { container, queryByTestId } = render(<App />)

    // wait for the data loading, otherwise the react
    // will try to update the state after the unmount
    await wait(() => expect(queryByTestId('table-list')).toBeInTheDocument())

    expect(container).toBeTruthy()
  })
  it('loads data from url after mounting', async () => {
    const { queryByTestId, getByTestId } = render(<App />)

    await wait(() => expect(queryByTestId('table-list')).toBeInTheDocument())

    expect(getByTestId('table-list')).toBeInTheDocument()
  })
  it('shows only items from active rating filters', async () => {
    // Setup
    const { getByText, queryAllByText, queryByTestId } = render(<App />)
    // Wait for the data to load
    await wait(() => expect(queryByTestId('table-list')).toBeInTheDocument())

    // check if we have items with rating 5
    const itemsByRatingBeforeFilter = [
      queryAllByText('1', { selector: 'span' }).length,
      queryAllByText('2', { selector: 'span' }).length,
      queryAllByText('3', { selector: 'span' }).length,
      queryAllByText('4', { selector: 'span' }).length,
      queryAllByText('5', { selector: 'span' }).length,
    ]
    expect(itemsByRatingBeforeFilter[4]).toBeGreaterThan(0)

    // disable rating 5
    fireEvent.click(getByText('5', { selector: 'button' }))

    const itemsByRatingAfterFilter = [
      queryAllByText('1', { selector: 'span' }).length,
      queryAllByText('2', { selector: 'span' }).length,
      queryAllByText('3', { selector: 'span' }).length,
      queryAllByText('4', { selector: 'span' }).length,
      queryAllByText('5', { selector: 'span' }).length,
    ]

    // check if the rating 5 items are gone
    expect(itemsByRatingAfterFilter[4]).toBe(0)
    // check if all other items are still there
    expect(itemsByRatingBeforeFilter.slice(0, 3)).toEqual(
      itemsByRatingAfterFilter.slice(0, 3)
    )

    // enable rating 5 again
    fireEvent.click(getByText('5', { selector: 'button' }))
    expect(queryAllByText('5', { selector: 'span' }).length).toEqual(
      itemsByRatingBeforeFilter[4]
    )
  })
  it('shows only items that match the search', async () => {
    // Setup
    const {
      getByTestId,
      queryByTestId,
      getAllByTestId,
      getByLabelText,
    } = render(<App />)
    // Wait for the data to load
    await wait(() => expect(queryByTestId('table-list')).toBeInTheDocument())

    const firstComment = getByTestId('item-comment').textContent
    const firstWord = firstComment.split(' ')[0]
    const itemsBeforeSearch = getAllByTestId('item').length
    const input = getByLabelText('search', { selector: 'input' })

    fireEvent.change(input, { target: { value: firstWord } })

    // check if input value changed
    expect(input.value).toBe(firstWord)
    // count items again
    const itemsAfterSearch = getAllByTestId('item').length
    // check if there's less items now
    expect(itemsBeforeSearch).toBeGreaterThan(itemsAfterSearch)
    // check if all the remaining comments matches the typed word
    getAllByTestId('item-comment')
      .map(node => node.textContent)
      .map(comment => expect(comment).toMatch(firstWord))
  })
})
