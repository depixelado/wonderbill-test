import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

it('renders title text', () => {
  const { getByText } = render(<App />)

  expect(getByText('Regular Payments')).toBeInTheDocument()
})

it('renders Add a bill button', () => {
  const { getByText } = render(<App />)

  expect(getByText('Add a bill')).toBeInTheDocument()
})
