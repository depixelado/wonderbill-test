import React from 'react'
import { render } from '@testing-library/react'
import PaymentsList from './PaymentsList'

describe('Add page', () => {
  it('renders body elements', () => {
    const payments = [
      {
        name: "Test1",
        amount: "50",
        startDate: "2020-10-11",
        frequency: "weekly",
        id: "7cb19742-40a4-4bb7-b741-fb893030c810"
      },
      {
        name: "Test2",
        amount: "50",
        startDate: "2020-10-12",
        frequency: "weekly",
        id: "7cb19742-40a4-4bb7-b741-fb893030c811"
      },
    ]
    const {
      getAllByTestId
    } = render(
      <PaymentsList payments={payments} />
    )

    expect(getAllByTestId("payment-item").length).toBe(2)
  })
})
