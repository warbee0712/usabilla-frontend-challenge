import React from 'react'
import { render } from 'test-utils'
import ErrorBoundary from '../ErrorBoundary'

function BuggyComponent() {
  throw new Error()
}

beforeEach(() => {
  jest.spyOn(console, 'error')
  global.console.error.mockImplementation(() => {})
})

afterEach(() => {
  global.console.error.mockRestore()
})

describe('ErrorBoundary', () => {
  it('should show error message when there is an error', () => {
    const { getByTestId } = render(
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    )

    expect(getByTestId('error-message')).toBeTruthy()
  })
  it('should not show anything without a error', () => {
    const { queryByTestId } = render(
      <ErrorBoundary>
        <div />
      </ErrorBoundary>
    )

    expect(queryByTestId('error-message')).toBeFalsy()
  })
})
