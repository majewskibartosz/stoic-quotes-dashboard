import React from 'react'
import { render } from '@testing-library/react'
import App from '../components/App'

describe('App', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('main-screen')).toBeInTheDocument()
  })

  it('displays the error component when a non-existent route is accessed', () => {
    const { getByTestId, history } = render(<App />, {
      initialEntries: ['/non-existent-route']
    })
    expect(getByTestId('error')).toBeInTheDocument()
    expect(history.location.pathname).toBe('/non-existent-route')
  })
})
