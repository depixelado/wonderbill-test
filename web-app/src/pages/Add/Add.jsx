import React from 'react'
import { useDispatch } from 'react-redux'
import LayoutPayment from '../../common/LayoutPayment/LayoutPayment'
import { createPayment } from '../../state/payments';

import PaymentForm from '../../components/PaymentForm/PaymentForm';
import { useHistory } from 'react-router-dom';

const Add = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleSaveClick = (payment) => {
    dispatch(createPayment(payment))
    history.push('/')
  }

  return (
    <LayoutPayment
      title="Add A Bill"
      subtitle="Enter your details"
      description="Keep track of your household spending by adding your bills"
    >
      <PaymentForm onSaveClick={handleSaveClick} />
    </LayoutPayment>
  )
}

export default Add
