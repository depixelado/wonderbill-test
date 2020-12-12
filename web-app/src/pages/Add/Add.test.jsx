import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import {Provider} from 'react-redux'
import Add from './Add'
import { createPayment } from '../../state/payments'
import store from '../../state/store'

describe('Add page', () => {
  it('renders title text', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Add />
      </Provider>
    )
  
    expect(getByText('Add A Bill')).toBeInTheDocument()
  })
  
  it('renders body elements', () => {
    const {
      getByText,
      getByPlaceholderText,
      getByLabelText
    } = render(
      <Provider store={store}>
        <Add />
      </Provider>
    )
  
    expect(getByText('Enter your details')).toBeInTheDocument()
    expect(getByText('Keep track of your household spending by adding your bills')).toBeInTheDocument()
    
    expect(getByPlaceholderText('Name')).toBeInTheDocument()
    expect(getByPlaceholderText('Amount')).toBeInTheDocument()
    expect(getByPlaceholderText('Start dates (DD/MM/YYYY)')).toBeInTheDocument()
    expect(getByLabelText('Frequency')).toBeInTheDocument()
  
    expect(getByText('Add new payment')).toBeInTheDocument()
  })

  it('shows "Add new payment button disabled by default', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Add />
      </Provider>
    )
    expect(getByText('Add new payment').disabled).toBe(true)
  })

  it('enables "Add new payment" button when all inputs are properly filled', () => {
    // Arrange
    const {
      getByText,
      getByPlaceholderText,
      getByLabelText
    } = render(
      <Provider store={store}>
        <Add />
      </Provider>
    )

    const nameInput = getByPlaceholderText('Name')
    const amountInput = getByPlaceholderText('Amount')
    const startDateInput = getByPlaceholderText('Start dates (DD/MM/YYYY)')
    const frequencyInput = getByLabelText('Frequency')
    const addButton = getByText('Add new payment')

    // Act 
    fireEvent.change(nameInput, { target: { value: "Test name" } })
    fireEvent.change(amountInput, { target: { value: "500" } })
    fireEvent.change(startDateInput, { target: { value: "07/12/2020" } })
    fireEvent.change(frequencyInput, { target: { value: "weekly" } })
  
    // Assert
    expect(addButton.disabled).toBe(false)
  })
})
