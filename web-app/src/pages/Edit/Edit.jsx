import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import LayoutPayment from '../../common/LayoutPayment/LayoutPayment'
import PaymentForm, { FORM_MODE } from '../../components/PaymentForm/PaymentForm'
import { getPayment, updatePayment, deletePayment, getPaymentByIdSelector } from '../../state/payments'

const Payment = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()
  const payment = useSelector(getPaymentByIdSelector(id))

  useEffect(() => {
    dispatch(getPayment(id))
  }, [dispatch, id]);

  const handleSaveClick = payment => {
    dispatch(updatePayment(payment))
    history.push('/')
  }

  const handleDeleteClick = paymentId => {
    dispatch(deletePayment(paymentId))
    history.push('/')
  }

  if(!payment) return null;

  return (
    <LayoutPayment
      title="Edit A Bill"
      subtitle={payment.name}
      description="If you'd like to edit your bill you can change the details below"
    >
      <PaymentForm
        payment={payment}
        mode={FORM_MODE.EDIT}
        onSaveClick={handleSaveClick}
        onDeleteClick={handleDeleteClick}
      />
    </LayoutPayment>
  )
}

export default Payment
