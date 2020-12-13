import React from 'react'
import { render } from '@testing-library/react'
import PaymentItem from './PaymentItem'
import { FREQUENCY } from '../../utils/constants'
import { getNextBillDate } from '../../utils/dates'

jest.mock('../../utils/dates')

describe('Add page', () => {
  it('renders body elements', () => {
    const {
      getByText,
      getByTestId
    } = render(
      <PaymentItem
        name="test"
        amount="500"
        startDate="2020-10-9"
        frequency={FREQUENCY.MONTHLY}
      />
    )

    expect(getByText('test')).toBeInTheDocument()
    expect(getByText('£500')).toBeInTheDocument()
    expect(getByText(FREQUENCY.MONTHLY)).toBeInTheDocument()
    expect(getNextBillDate).toHaveBeenCalled()
    expect(getByTestId('nextDate')).toBeInTheDocument()
  })
})
