import React, {useMemo} from 'react'
import moment from 'moment'
import styles from './PaymentItem.module.scss'
import { getNextBillDate } from '../../utils/dates';

const PaymentItem = ({
  amount,
  frequency,
  id,
  name,
  startDate,
}) => {
  const nextDate = useMemo(() => 
    getNextBillDate(new Date(startDate), new Date(), frequency),
    [startDate, frequency]
  );
  const nextDateFormatted = useMemo(
    () => moment(nextDate).format('Do MMMM, YYYY'),
    [nextDate]
  )

  return (
    <div className={styles.paymentItem}>
      <div className={styles.row}>
        <div className={styles.name}>{name}</div>
        <div className={styles.amount}>£{amount}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.frequency}>{frequency}</div>
        <div className={styles.nextDate} data-testid="nextDate">Next: {nextDateFormatted}</div>
      </div>
    </div>
  )
}

export default PaymentItem;
