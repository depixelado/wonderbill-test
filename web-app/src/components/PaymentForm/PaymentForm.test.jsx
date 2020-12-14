import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import PaymentForm from './PaymentForm'
import {FREQUENCY} from '../../utils/constants'

describe('PaymentForm', () => {
  it('renders payment elements', () => {
    const {
      getByText,
      getByPlaceholderText,
      getByTestId
    } = render(<PaymentForm />)

    expect(getByPlaceholderText('Name')).toBeInTheDocument()
    expect(getByPlaceholderText('Amount')).toBeInTheDocument()
    expect(getByPlaceholderText('Start date')).toBeInTheDocument()
    expect(getByTestId('frequency')).toBeInTheDocument()
  
    expect(getByText('Add new payment')).toBeInTheDocument()
  })

  it('shows "Add new payment" button disabled by default', () => {
    const { getByText } = render(<PaymentForm />)
    expect(getByText('Add new payment').disabled).toBe(true)
  })

  it('enables "Add new payment" button when all inputs are properly filled', () => {
    // Arrange
    const {
      getByText,
      getByPlaceholderText,
      getByTestId
    } = render(<PaymentForm />)

    const nameInput = getByPlaceholderText('Name')
    const amountInput = getByPlaceholderText('Amount')
    const startDateInput = getByPlaceholderText('Start date')
    const frequencyInput = getByTestId('frequency')
    const addButton = getByText('Add new payment')

    // Act 
    fireEvent.change(nameInput, { target: { value: "Test name" } })
    fireEvent.change(amountInput, { target: { value: "500" } })
    fireEvent.change(startDateInput, { target: { value: "2020-10-07" } })
    fireEvent.change(frequencyInput, { target: { value: FREQUENCY.WEEKLY } })
  
    // Assert
    expect(addButton.disabled).toBe(false)
  })
})
