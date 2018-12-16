import React from 'react'
import { render } from 'test-utils'
import RatingsFilter from '../RatingsFilter'
import { fireEvent } from 'react-testing-library'

describe('RatingsFilter', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <RatingsFilter
        options={[1, 2, 3, 4, 5]}
        active={[1, 2, 3]}
        toggleFilter={() => {}}
      />
    )
    const node = container.firstChild

    expect(node).toMatchSnapshot()
  })
  it('should render all options', () => {
    const { getAllByText } = render(
      <RatingsFilter
        options={[1, 2, 3, 4, 5]}
        active={[1, 2, 3]}
        toggleFilter={() => {}}
      />
    )

    const buttons = getAllByText(/[0-9]/)

    expect(buttons).toHaveLength(5)
    // test that all options have the right text
    expect(buttons[0].textContent).toBe('1')
    expect(buttons[1].textContent).toBe('2')
    expect(buttons[2].textContent).toBe('3')
    expect(buttons[3].textContent).toBe('4')
    expect(buttons[4].textContent).toBe('5')
    // test that 1,2,3 are active and 4,5 are not
    expect(buttons[0].className).toEqual(buttons[1].className)
    expect(buttons[1].className).toEqual(buttons[2].className)
    expect(buttons[2].className).not.toEqual(buttons[3].className)
    expect(buttons[3].className).toEqual(buttons[4].className)
  })
  it('should fire toggle function when a filter button is clicked', () => {
    const handleToggle = jest.fn()
    const { getByText } = render(
      <RatingsFilter
        options={[1, 2, 3, 4, 5]}
        active={[1, 2, 3]}
        toggleFilter={handleToggle}
      />
    )

    const FilterButton = getByText('1')
    fireEvent.click(FilterButton)

    expect(handleToggle).toHaveBeenCalledTimes(1)
    expect(handleToggle).toHaveBeenCalledWith(1)
  })
})
