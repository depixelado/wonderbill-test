import React from 'react'
import PropTypes from 'prop-types'
import PaymentItem from '../PaymentItem/PaymentItem'

import styles from './PaymentList.module.scss'
import { PaymentRequired } from '../../propTypes/payment'

const PaymentsList = ({payments}) => {
  return (
    <ul className={styles.paymentsList}>
      {payments.map(payment => (
        <li
          data-testid="payment-item"
          className={styles.paymentItem}
          key={payment.id}
        >
          <PaymentItem {...payment} />
        </li>
      ))}
    </ul>
  )
}

PaymentsList.propTypes = {
  payments: PropTypes.arrayOf(PropTypes.shape(PaymentRequired))
}

export default PaymentsList;
