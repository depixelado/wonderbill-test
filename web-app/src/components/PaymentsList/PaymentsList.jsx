import React from 'react'
import PaymentItem from '../PaymentItem/PaymentItem'

import styles from './PaymentList.module.scss'

const PaymentsList = ({payments}) => {
  return (
    <ul className={styles.paymentsList}>
      {payments.map(payment => (
        <li data-testid="payment-item" className={styles.paymentItem} key={payment.id}>
          <PaymentItem {...payment} />
        </li>
      ))}
    </ul>
  )
}

export default PaymentsList;
